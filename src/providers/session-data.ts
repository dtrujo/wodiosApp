import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import firebase from 'firebase';

/**
  Class for the TrainingData provider.
*/
@Injectable()
export class SessionData {

  fireAuth : any;
  blocksRef : any;
  sessionsRef : any;
  trainingsRef : any;
  partsRef : any;


  /**
    [constructor description]
  */
  constructor(public http: Http) {
    this.fireAuth = firebase.auth();

    this.trainingsRef = firebase.database().ref('/trainings');
    this.sessionsRef = firebase.database().ref('/sessions');
    this.blocksRef = firebase.database().ref('/blocks');
    this.partsRef = firebase.database().ref('/parts');
  }

  /**
    [sessionDetails description]
    Get details for specific session using session Id.

    - id: the session's id

  */
  sessionDetails( id : string ): Observable<any> {
    return Observable.create( observer => {

      // get session details
      let listener = this.sessionsRef.child(id).on('value', sessionSnap => {
        let session = sessionSnap.val();
        session.Id = sessionSnap.key;

        // pass observer next object
        observer.next(session);
      }, observer.error);

      return () => {
        this.sessionsRef.off('value', listener);
      };
    });
  }

  /**
    [sessionBlocks description]
    Get blocks for specific session.
    @param {string} id  [Session's id]
  */
  sessionBlocks( id : string ): Observable<any> {
    return Observable.create( observer => {

      // get training details
      let listener = this.blocksRef.orderByChild("Session").equalTo(id).on('child_added', blockSnap => {

        // get block and id
        let block = blockSnap.val();
        block.Id = blockSnap.key;

        // pass observer next object
        observer.next(block);
      }, observer.error);

      return () => {
        this.blocksRef.off('child_added', listener);
      };
    });
  }

  /**
    [addTraining description]
    add new training into notebook's list

    - trainingId : the training's is.
    - title: title of the session.
    - description: description of the session.
    - date: date session.

  */
  addSession( trainingId : string, title: string, description: string, date: string ){

    // A session entry.
    var sessionData = {
      Title: title,
      Description: description,
      Date: date,
      Training: trainingId
    };

    // Get a key for a new session.
    var newSessionsKey = this.sessionsRef.push().key;

    // Write the new sessions's data simultaneously
    // in the sessions list and the user's session list.
    var updates = {};
    updates['/sessions/' + newSessionsKey] = sessionData;

    // update
    firebase.database().ref().update(updates);

    // add new id in the session field of the specific training
    return this.trainingsRef.child(trainingId + '/Sessions/').push({ Id: newSessionsKey });
  }
}
