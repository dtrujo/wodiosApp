import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController, NavParams } from 'ionic-angular';

import { BlockDetailsPage } from '../block-details/block-details';

import { PartData } from '../../providers/part-data';

/*
  Generated class for the AddPart page.
*/
@Component({
  selector: 'page-add-part',
  templateUrl: 'add-part.html'
})
export class AddPartPage {

  newPartForm : any;
  idSession : any;
  idBlock : any;

  /**
    Constructor
  */
  constructor( public navCtrl: NavController,
               public partData: PartData,
               public alertCtrl: AlertController,
               public formBuilder: FormBuilder,
               public params: NavParams ) {

     this.idSession = this.params.get("idSession");
     this.idBlock = this.params.get("idBlock");

     console.log(this.idSession);

     // validate form
     this.newPartForm = formBuilder.group({
       description: ['', Validators.required]
     })
  }

  /**
    [addPArt description]
    call to service for add new part into a block
  */
  addPart( idSession, idBlock ){
    this.partData.addPart(
      this.idSession,
      this.idBlock,
      this.newPartForm.value.description,
      'type').then(() => {
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
}