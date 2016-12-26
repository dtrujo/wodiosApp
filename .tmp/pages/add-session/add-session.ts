import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController, NavParams } from 'ionic-angular';

import { TrainingDetailsPage } from '../training-details/training-details';

import { TrainingData } from '../../providers/training-data';

/*
  class for the AddSession page.
*/
@Component({
  selector: 'page-add-session',
  templateUrl: 'add-session.html'
})
export class AddSessionPage {

  newSessionForm : any;
  training : any;

  /**
    Cosntructor
  */
  constructor( public navCtrl: NavController,
               public trainingData: TrainingData,
               public alertCtrl: AlertController,
               public formBuilder: FormBuilder,
               public params: NavParams ) {

     this.training = this.params.get("training");

     // validate form
     this.newSessionForm = formBuilder.group({
       title: ['', Validators.required],
       description: ['', Validators.required],
       hour: [new Date().getTime(), Validators.required]
     })

  }

  /**
    [addSession description]
    call to service for add new session in a training
  */
  addSession(){
    this.trainingData.addSession(
      this.training.id,
      this.newSessionForm.value.title,
      this.newSessionForm.value.description,
      this.newSessionForm.value.hour).then(() => {
        this.navCtrl.setRoot( TrainingDetailsPage );
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
    console.log('Hello AddSessionPage Page');
  }
}
