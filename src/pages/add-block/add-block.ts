import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController, NavParams } from 'ionic-angular';

import { SessionDetailsPage } from '../session-details/session-details';

import { TrainingData } from '../../providers/training-data';

/*
  class for the AddSession page.
*/
@Component({
  selector: 'page-add-block',
  templateUrl: 'add-block.html'
})
export class AddBlockPage {

  newBlockForm : any;
  sessionId : any;
  trainingId : any;

  /**
    Cosntructor
  */
  constructor( public navCtrl: NavController,
               public trainingData: TrainingData,
               public alertCtrl: AlertController,
               public formBuilder: FormBuilder,
               public params: NavParams ) {

     this.trainingId = this.params.get("idTraining");
     this.sessionId = this.params.get("idSession");

     // validate form
     this.newBlockForm = formBuilder.group({
       title: ['', Validators.required],
       description: ['', Validators.required]
     })

  }

  /**
    [addBlock description]
    call to service for add new block in a session
  */
  addBlock(){
    this.trainingData.addBlock(
      this.trainingId, this.sessionId,
      this.newBlockForm.value.title,
      this.newBlockForm.value.description).then(() => {
        this.navCtrl.pop( );
    }, (error) => {

      var errorMessage: string = error.message;
      let alert = this.alertCtrl.create({
        message: errorMessage,
        buttons: [{
          text: "Ok",
          role: 'cancel'
        }]
      });

      alert.present();
    });
  }

  /**

  */
  ionViewDidLoad() {
    console.log('Hello AddBlockPage Page');
  }
}
