import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { TrainingDetailsPage } from '../training-details/training-details';
import { TrainingData } from '../../providers/training-data';
/*
  class for the AddSession page.
*/
export var AddSessionPage = (function () {
    /**
      Cosntructor
    */
    function AddSessionPage(navCtrl, trainingData, alertCtrl, formBuilder, params) {
        this.navCtrl = navCtrl;
        this.trainingData = trainingData;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.params = params;
        this.training = this.params.get("training");
        // validate form
        this.newSessionForm = formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            hour: [new Date().getTime(), Validators.required]
        });
    }
    /**
      [addSession description]
      call to service for add new session in a training
    */
    AddSessionPage.prototype.addSession = function () {
        var _this = this;
        this.trainingData.addSession(this.training.id, this.newSessionForm.value.title, this.newSessionForm.value.description, this.newSessionForm.value.hour).then(function () {
            _this.navCtrl.setRoot(TrainingDetailsPage);
        }, function (error) {
            var errorMessage = error.message;
            var alert = _this.alertCtrl.create({
                message: errorMessage,
                buttons: [{
                        text: "Ok",
                        role: 'cancel'
                    }]
            });
            alert.present();
        });
    };
    /**
  
    */
    AddSessionPage.prototype.ionViewDidLoad = function () {
        console.log('Hello AddSessionPage Page');
    };
    AddSessionPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-add-session',
                    templateUrl: 'add-session.html'
                },] },
    ];
    /** @nocollapse */
    AddSessionPage.ctorParameters = [
        { type: NavController, },
        { type: TrainingData, },
        { type: AlertController, },
        { type: FormBuilder, },
        { type: NavParams, },
    ];
    return AddSessionPage;
}());
//# sourceMappingURL=add-session.js.map