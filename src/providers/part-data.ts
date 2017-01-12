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
  sessionsRef : any;

  /**
    [constructor description]
  */
  constructor(public http: Http) {
    this.fireAuth = firebase.auth();

    this.partsRef = firebase.database().ref('/parts');
    this.sessionsRef = firebase.database().ref('/sessions');
  }

  /**
    [parts description]
    Get parts for specific block.
    @param {string} id  [Block's id]
  */
  parts( id : string ): Observable<any> {
    return Observable.create( observer => {

      // get training details
      let listener = this.partsRef.orderByChild("Block").equalTo(id).on('child_added', partSnap => {

        // get part and id
        let part = partSnap.val();
        part.Id = partSnap.key;

        // pass observer next object
        observer.next(part);
      }, observer.error);

      return () => {
        this.sessionsRef.off('child_added', listener);
      };
    });
  }

  /**
    [details description]
    Get details for specific part using block Id.

    - id: the part's id

  */
  details( id : string ): Observable<any> {
    return Observable.create( observer => {

      // get part details
      let listener = this.partsRef.child(id).on('value', partSnap => {

        // get part value and add id using key
        let part = partSnap.val();
        part.Id = partSnap.key;

        // pass observer next object
        observer.next(part);

      }, observer.error);
      return () => {
        this.partsRef.off('value', listener);
      };
    });
  }

  /**
    [add description]
    add new block into session

    - idBlock : the id of the block.
    - title: title of the part.
    - description: description of the part.

  */
  add( idBlock: string, description: string, type: string ){

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

  /**
    [remove description]
    delete exercise of the list

    - id: part's id
  */
  remove( id: string ){
    this.partsRef.child( id).remove();
    return true;
  }

}
