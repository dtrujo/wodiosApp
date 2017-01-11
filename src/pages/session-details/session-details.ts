import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddBlockPage } from '../add-block/add-block';
import { AddPartPage } from '../add-part/add-part';
import { SessionData } from '../../providers/session-data';
import { BlockData } from '../../providers/block-data';

@Component({
  selector: 'page-session-details',
  templateUrl: 'session-details.html'
})
export class SessionDetailsPage implements OnInit, OnDestroy {

  session : any;
  parts : any [];
  blocks : Array<any> = [];

  blocksSubs : any;
  blocksUpdateSubs : any;
  partsDeleteSubs : any;

  /**
  */
  constructor( public navCtrl: NavController,
               public sessionData: SessionData,
               public blockData: BlockData,
               public ngZone: NgZone,
               public params: NavParams ) {

    // retrived friends params using NavParams
    this.session = this.params.get("session");

    // remove of the part's list the value
    // which was removed in firebase.
    this.partsDeleteSubs = this.blockData.checkRemovePart().subscribe((id) => {
      console.log( id );
    });

  }

  /**
    [ngOnInit description]
    This event fire any time when user access to the view
    When fire we need to retrieved the sessionDetails calling
    the services.
  */
  ngOnInit() {
    this.blocksSubs = this.blockData.blocks( this.session.Id ).subscribe ( block => {
      this.ngZone.run(() => {
          this.blocks.push(block);
      });
    });
  }

  /**
    [ngOnDestroy description]
    Destroy subscription when the view
    is detroyed. Not duplicate responses
  */
  ngOnDestroy() {
    this.blocksSubs.unsubscribe();
    //this.blocksUpdateSubs.unsubscribe();
  }

  /**
    [goToAddBlock description]
    go to add block page
  */
  goToAddBlock(){
    this.navCtrl.push( AddBlockPage, { id : this.session.Id } );
  }

  /**
    [goToAddPart description]
    go to add part page
  */
  goToAddPart( idBlock ){
    this.navCtrl.push( AddPartPage, { idBlock : idBlock } );
  }

  /**
    [deletePart description]
    remove part to the block list

    - id: part's id
  */
  deletePart ( idBlock, idPart ){
    this.blockData.removePart(  idBlock, idPart );
  }

}
