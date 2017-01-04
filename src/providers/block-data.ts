import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import firebase from 'firebase';

/**
  Class for the TrainingData provider.
*/
@Injectable()
export class BlockData {

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
    [blockDetails description]
    Get details for specific block using session Id.

    - id: the block's id

  */
  blockDetails( id : string ): Observable<any> {
    return Observable.create( observer => {

      // get training details
      let listener = this.blocksRef.child(id).on('value', blockSnap => {

        let block = blockSnap.val();
        block.Id = blockSnap.key;

        // control if the training has sessions
        if (block.Parts){

          // clear the blocks array
          block.Parts = [];

          // get sessions in this training
          this.partsRef.orderByChild("Part").equalTo(block.Id).once('value', partsSnap => {

            // if have session, we need to convert [object, object] to array
            if (partsSnap.val())
              block.Parts = Object.keys(partsSnap.val()).map(function(k){return partsSnap.val()[k]});
          });
        }

        // pass observer next object
        observer.next(block);
      }, observer.error);

      return () => {
        this.blocksRef.off('value', listener);
      };
    });
  }

  /**
    [addblock description]
    add new block into session

    - sessionId : the id of the session.
    - title: title of the block.
    - description: description of the block.

  */
  addBlock( sessionId : string, title: string, description: string ){

    // A block entry.
    var blockData = {
      Title: title,
      Description: description
    };

    // add new block of the specific session
    return this.sessionsRef.child(sessionId + '/Blocks/').push( blockData );
  }
}
