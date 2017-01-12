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
  partsRef : any;


  /**
    [constructor description]
  */
  constructor(public http: Http) {
    this.fireAuth = firebase.auth();

    this.sessionsRef = firebase.database().ref('/sessions');
    this.blocksRef = firebase.database().ref('/blocks');
    this.partsRef = firebase.database().ref('/parts');
  }

  /**
    [sessions description]
    Get sessions for specific training.
    @param {string} id  [Training's id]
  */
  sessions( id : string ): Observable<any> {
    return Observable.create( observer => {

      // get training details
      let listener = this.sessionsRef.orderByChild("Training").equalTo(id).on('child_added', sessionSnap => {

        // get session and id
        let session = sessionSnap.val();
        session.Id = sessionSnap.key;

        // pass observer next object
        observer.next(session);
      }, observer.error);

      return () => {
        this.sessionsRef.off('child_added', listener);
      };
    });
  }

  /**
    [sessionDetails description]
    Get details for specific session using session Id.

    - id: the session's id

  */
  details( id : string ): Observable<any> {
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
    [addTraining description]
    add new training into notebook's list

    - trainingId : the training's is.
    - title: title of the session.
    - description: description of the session.
    - date: date session.

  */
  add( trainingId : string, title: string, description: string, date: string ){

    // A session entry.
    var sessionData = {
      Title: title,
      Description: description,
      Date: date,
      Training: trainingId
    };

    // get a key for a new session.
    var newSessionsKey = this.sessionsRef.push().key;

    // write the new sessions's data simultaneously
    // in the sessions list and the user's session list.
    var updates = {};
    updates['/sessions/' + newSessionsKey] = sessionData;
    updates['/trainings/' + trainingId + '/Sessions/' + newSessionsKey] = true;

    // update
    return firebase.database().ref().update(updates);
  }
}
