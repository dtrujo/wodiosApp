import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SessionDetailsPage } from '../session-details/session-details';
import { AddSessionPage } from '../add-session/add-session';
import { TrainingData } from '../../providers/training-data';

@Component({
  selector: 'page-training-details',
  templateUrl: 'training-details.html'
})
export class TrainingDetailsPage implements OnInit, OnDestroy {

  training : any;
  sessions : Array<any> = [];
  sessionsSubs : any;

  /**
    Constructor
  */
  constructor( public navCtrl: NavController,
               public trainingData: TrainingData,
               public ngZone: NgZone,
               public params: NavParams ) {

    // retrived params using NavParams
    this.training = this.params.get("training");
  }

  /**
    [ngOnInit description]
    This event fire any time when user access to the view
    When fire we need to retrieved the sessions calling
    the services.
  */
  ngOnInit() {
    this.sessionsSubs = this.trainingData.trainingSessions( this.training.Id ).subscribe ( session => {
      this.ngZone.run(() => {
        this.sessions.push(session);
      });
    });
  }

  /**
    [ngOnDestroy description]
    Destroy subscription when the view
    is detroyed. Not duplicate responses
  */
  ngOnDestroy() {
    this.sessionsSubs.unsubscribe();
  }

  /**
    [goToAddSession description]
    go to add session page
  */
  goToAddSession() {
    this.navCtrl.push( AddSessionPage, { id : this.training.Id } );
  }

  /**
    [sessionDetails description]
    go to sesion details page

    - id: the sessión's id
  */
  sessionDetails( session ) {
    this.navCtrl.push(SessionDetailsPage, { session : session });
  }
}
