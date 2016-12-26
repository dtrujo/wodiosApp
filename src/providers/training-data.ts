import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import firebase from 'firebase';

/**
  Class for the TrainingData provider.
*/
@Injectable()
export class TrainingData {

  fireAuth : any;
  trainingsRef : any;
  sessionsRef : any;
  trainingsRefByUser : any;

  data: Observable<any>;

  /**
    [constructor description]
  */
  constructor(public http: Http) {
    this.fireAuth = firebase.auth();

    this.trainingsRef = firebase.database().ref('/trainings');
    this.sessionsRef = firebase.database().ref('/sessions');
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
    [trainingDetails description]
    Get details for specific training session using training Id.

    - id: the training's id

  */
  trainingDetails( id : string ): Observable<any> {
    return Observable.create( observer => {

      // get training details
      let listener = this.trainingsRef.child(id).on('value', trainingSnap => {

        let training = trainingSnap.val();
        training.Id = trainingSnap.key;
        training.Sessions = [];

        // get sessions in this training
        this.sessionsRef.orderByChild("Training").equalTo(training.Id).once('value', sessionsSnap => {

          // if have session, we need to convert [object, object] to array
          if (sessionsSnap.val())
            training.Sessions = Object.keys(sessionsSnap.val()).map(function(k){return sessionsSnap.val()[k]});
        });

        // pass observer next object
        observer.next(training);

      }, observer.error);
      return () => {
        this.trainingsRef.off('value', listener);
      };

    });
  }

  /**
    [addTraining description]
    add new training into notebook's list

    - title: title of the training
    - description: description of the training
    - date: data when the training was created

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
    [addBlock description]
    add new block into training's list
  */
  addBlock( trainingId: string, sessionId: string, title: string, description: string ){
    return this.trainingsRef.child( trainingId + "/Sessions/" + sessionId + "/Blocks" ).push({
      Title: title,
      Description: description
    });
  }
}
