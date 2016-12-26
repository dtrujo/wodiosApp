import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SessionDetailsPage } from '../session-details/session-details';
import { AddSessionPage } from '../add-session/add-session';

import { TrainingData } from '../../providers/training-data';
import { SessionData } from '../../providers/session-data';

@Component({
  selector: 'page-training-details',
  templateUrl: 'training-details.html'
})
export class TrainingDetailsPage implements OnInit {

  training : any;
  trainingId : any;

  /**
    Constructor
  */
  constructor( public navCtrl: NavController,
               public trainingData: TrainingData,
               public sessionData: SessionData,
               public ngZone: NgZone,
               public params: NavParams ) {

    // retrived friends params using NavParams
    this.trainingId = this.params.get("id");
  }

  /**
    [ngOnInit description]
    This event fire any time when user access to the view
    When fire we need to retrieved the trainingDetails calling
    the services.
  */
  ngOnInit() {

    this.trainingData.trainingDetails( this.trainingId ).subscribe ( training => {
      this.ngZone.run(() => {
        this.training = training;
      });
    });
  }

  /**
    [goToAddSession description]
    go to add session page
  */
  goToAddSession() {
    this.navCtrl.push( AddSessionPage, { id : this.trainingId } );
  }

  /**
    [sessionDetails description]
    go to sesion details page

    - id: the sessión's id
  */
  sessionDetails( id ) {
    this.navCtrl.push(SessionDetailsPage, { idSession : id });
  }
}
