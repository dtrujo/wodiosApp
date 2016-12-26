import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ObjectToArray } from '../../pipes/objectToArray';

import { SessionDetailsPage } from '../session-details/session-details';
import { AddSessionPage } from '../add-session/add-session';
 
@Component({
  selector: 'page-training-details',
  templateUrl: 'training-details.html'
})
export class TrainingDetailsPage {

  training : any;

  /**
    Constructor
  */
  constructor( public navCtrl: NavController,
               public objectToArray: ObjectToArray,
               public params: NavParams ) {

    // retrived friends params using NavParams
    this.training = this.params.get("training");


    console.log(this.training);
    /*this.training = {
      Title : 'Title of the training',
      Description : 'Description of the training',
      Sessions : [ {
        Title : 'Session 1',
        Description : ' Description Session 1'
      },
      {
        Title : 'Session 2',
        Description : ' Description Session 2'
      },
      {
        Title : 'Session 3',
        Description : ' Description Session 3'
      }]
    }*/

  }

  /**
    [goToAddSession description]
    go to add session page
  */
  goToAddSession(){
      this.navCtrl.push(AddSessionPage, { training : this.training } );
  }

  /**
    [sessionDetails description]
    go to training details page
  */
  sessionDetails() {
    this.navCtrl.push(SessionDetailsPage);
  }

  /**
  */
  ionViewDidLoad() {
    console.log('Hello TrainingDetailsPage Page');
  }

}
