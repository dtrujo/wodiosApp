import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddBlockPage } from '../add-block/add-block';

import { SessionData } from '../../providers/session-data';

@Component({
  selector: 'page-session-details',
  templateUrl: 'session-details.html'
})
export class SessionDetailsPage implements OnInit {

  session : any;
  sessionId : any;

  /**
  */
  constructor( public navCtrl: NavController,
               public sessionData: SessionData,
               public ngZone: NgZone,
               public params: NavParams ) {

    // retrived friends params using NavParams
    this.sessionId = this.params.get("idSession");
  }

  /**
    [ngOnInit description]
    This event fire any time when user access to the view
    When fire we need to retrieved the sessionDetails calling
    the services.
  */
  ngOnInit() {
    this.sessionData.sessionDetails( this.sessionId ).subscribe ( session => {
      this.ngZone.run(() => {
        this.session = session;
      });
    });
  }

  /**
    [goToAddBlock description]
    go to add block page
  */
  goToAddBlock(){
    //this.navCtrl.push( AddBlockPage, { idTraining : this.trainingId, idSession : this.sessionId } );
  }

  /**
  */
  ionViewDidLoad() {
    console.log('Hello SessionDetailsPage Page');
  }
}
