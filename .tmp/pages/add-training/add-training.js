import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController } from 'ionic-angular';
import { NotebookPage } from '../notebook/notebook';
import { TrainingData } from '../../providers/training-data';
/**
  Class for the AddTrainingPage page.
*/
export var AddTrainingPage = (function () {
    /**
      [constructor description]
    */
    function AddTrainingPage(navCtrl, trainingData, alertCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.trainingData = trainingData;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        // validate form
        this.newTrainingForm = formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            date: [new Date().toISOString(), Validators.required]
        });
    }
    /**
      [addTraining description]
      call to service for add new training in the database
    */
    AddTrainingPage.prototype.addTraining = function () {
        var _this = this;
        this.trainingData.addTraining(this.newTrainingForm.value.title, this.newTrainingForm.value.description, this.newTrainingForm.value.date).then(function () {
            _this.navCtrl.setRoot(NotebookPage);
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
    AddTrainingPage.prototype.ionViewDidLoad = function () {
        console.log('Hello AddTrainingPage Page');
    };
    AddTrainingPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-add-training',
                    templateUrl: 'add-training.html'
                },] },
    ];
    /** @nocollapse */
    AddTrainingPage.ctorParameters = [
        { type: NavController, },
        { type: TrainingData, },
        { type: AlertController, },
        { type: FormBuilder, },
    ];
    return AddTrainingPage;
}());
//# sourceMappingURL=add-training.js.map