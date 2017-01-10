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

        // get training and id
        let training = snapshot.val();
        training.Id = snapshot.key;
        observer.next(training);

      }, observer.error);

      return () => {
        this.trainingsRef.off('child_added', listener);
      };
    });
  }

  /**
    [details description]
    Get details for specific training.
    @param {string} id  [Training's id]
  */
  details( id : string ): Observable<any> {
    return Observable.create( observer => {

      // get training details
      let listener = this.trainingsRef.child(id).on('value', trainingSnap => {

        // get training and id
        let training = trainingSnap.val();
        training.Id = trainingSnap.key;

        // pass observer next object
        observer.next(training);
      }, observer.error);

      return () => {
        this.trainingsRef.off('value', listener);
      };
    });
  }

  /**
    [add description]
    add new training into notebook's list
    @param  {string} title  [Training's title]
    @param  {string} description  [Training's description]
    @param  {string} date  [Training's date]
  */
  add( title: string, description: string, date: string ){
    var userId = this.fireAuth.currentUser.uid;

    return this.trainingsRef.push({
      Title: title,
      Description: description,
      Date: date,
      User: userId
    });
  }
}
