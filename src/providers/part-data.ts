import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import firebase from 'firebase';

/**
  Class for the PartData provider.
*/
@Injectable()
export class PartData {

  fireAuth : any;
  partsRef : any;
  blocksRef : any;
  sessionsRef : any;

  /**
    [constructor description]
  */
  constructor(public http: Http) {
    this.fireAuth = firebase.auth();

    this.partsRef = firebase.database().ref('/parts');
    this.blocksRef = firebase.database().ref('/blocks');
    this.sessionsRef = firebase.database().ref('/sessions');
  }

  /**
    [partDetails description]
    Get details for specific part using block Id.

    - id: the part's id

  */
  partDetails( id : string ): Observable<any> {
    return Observable.create( observer => {

      // get part details
      let listener = this.partsRef.child(id).on('value', partSnap => {

        let part = partSnap.val();
        part.Id = partSnap.key;

        // control if the training has sessions
        /*if (block.Parts){

          // clear the blocks array
          block.Parts = [];

          // get sessions in this training
          this.partsRef.orderByChild("Part").equalTo(block.Id).once('value', partsSnap => {

            // if have session, we need to convert [object, object] to array
            if (partsSnap.val())
              block.Parts = Object.keys(partsSnap.val()).map(function(k){return partsSnap.val()[k]});
          });
        }*/

        // pass observer next object
        observer.next(part);

      }, observer.error);

      return () => {
        this.partsRef.off('value', listener);
      };
    });
  }

  /**
    [addPart description]
    add new block into session

    - idBlock : the id of the block.
    - title: title of the part.
    - description: description of the part.

  */
  addPart( idBlock: string, description: string, type: string ){

    // a part entry
    var partData = {
      Block : idBlock,
      Description: description,
      Type: type
    };

    // get a key for a new part.
    var newPartKey = this.partsRef.push().key;

    // write the new parts's data simultaneously
    // in the parts list and the block's parts list.
    var updates = {};
    updates['/parts/' + newPartKey] = partData;
    updates['/blocks/' + idBlock + '/Parts/' + newPartKey] = true;

    return firebase.database().ref().update(updates);
  }
}
