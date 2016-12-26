import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import firebase from 'firebase';

/*
  Class for the TrainingData provider.
*/
@Injectable()
export class TrainingData {

  fireAuth : any;
  trainingsRef : any;
  trainingsRefByUser : any;

  /**
    [constructor description]
  */
  constructor(public http: Http) {
    this.fireAuth = firebase.auth();
    this.trainingsRef = firebase.database().ref('/trainings');
  }

  /**
    [trainings description]
    Get all trainings in the firebase database using observer
    to detect when element has been added or modified.
  */
  trainings(): Observable<any> {
    return Observable.create( observer => {

      // get actual user
      var userId = this.fireAuth.currentUser.uid;

      // filter all training specific user
      //this.trainingsRefByUser = this.trainingsRef.child( '/User/' + userId );

      // get child training
      let listener = this.trainingsRef.orderByChild("User").equalTo(userId).on('child_added', snapshot => {

        let data = snapshot.val();
        data.id = snapshot.key;
        observer.next(data);

      }, observer.error);

      return () => {
        this.trainingsRef.off('child_added', listener);
      };

    });
  }

  /**
    [addTraining description]
    add new training into notebook's list
  */
  addTraining( title: string, description: string, date: string ){
    var userId = this.fireAuth.currentUser.uid;

    return this.trainingsRef.push({
      Title: title,
      Description: description,
      Date: date,
      User: userId
    });
  }

  /**
    [addSession description]
    add new session into training's list
  */
  addSession( trainingId: string, title: string, description: string, hour: string ){
    return this.trainingsRef.child( trainingId + "/Sessions" ).push({
      Title: title,
      Description: description,
      Hour: hour
    });
  }

}
