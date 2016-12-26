import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, LoadingController, ViewController, NavParams, AlertController } from 'ionic-angular';
import { ExerciseData } from '../../providers/exercise-data';
/**
  Class for the PrPage page.
*/
export var PrPage = (function () {
    /**
      Constructor
    */
    function PrPage(navCtrl, formBuilder, navParams, exerciseData, loadingCtrl, alertCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.exerciseData = exerciseData;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        // take exercises and checke correct type
        this.exercise = this.navParams.get("exercise");
        this.types = ['Weight', 'Aerobic', 'Gymnastic'];
        this.units = ['Kg', 'Time', 'Reps'];
        this.selected = { type: this.exercise.Type, unit: this.exercise.Unit };
        // validate form
        this.newPrForm = formBuilder.group({
            pr: ['', Validators.required],
            type: [''],
            unit: ['']
        });
    }
    /**
      [dismiss description]
      Close actual modal.
    */
    PrPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    /**
      [updatePr description]
      call firebase service to update pr value
    */
    PrPage.prototype.updatePr = function (exerciseId) {
        var _this = this;
        // control if the form has been validated
        if (!this.newPrForm.valid) {
            console.log(this.newPrForm.value);
        }
        else {
            this.exerciseData.updatePr(exerciseId, this.newPrForm.value.pr, this.newPrForm.value.type, this.newPrForm.value.unit).then(function () {
                _this.viewCtrl.dismiss();
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
        }
    };
    PrPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'pr.html'
                },] },
    ];
    /** @nocollapse */
    PrPage.ctorParameters = [
        { type: NavController, },
        { type: FormBuilder, },
        { type: NavParams, },
        { type: ExerciseData, },
        { type: LoadingController, },
        { type: AlertController, },
        { type: ViewController, },
    ];
    return PrPage;
}());
//# sourceMappingURL=pr.js.map