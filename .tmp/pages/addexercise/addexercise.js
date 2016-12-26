import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { ExercisesPage } from '../exercises/exercises';
import { ExerciseData } from '../../providers/exercise-data';
/**
  Class for the AddexercisePage page.
*/
export var AddexercisePage = (function () {
    /**
      [constructor description]
    */
    function AddexercisePage(navCtrl, formBuilder, loadingCtrl, exerciseData, alertCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.exerciseData = exerciseData;
        this.alertCtrl = alertCtrl;
        this.types = ['Weight', 'Gymnastic', 'Aerobic'];
        this.units = ['Kg', 'Time', 'Reps'];
        // validate form
        this.newExerciseForm = formBuilder.group({
            name: ['', Validators.required],
            pr: ['', Validators.required],
            type: [''],
            unit: ['']
        });
    }
    /**
      [addExercise description]
      call to service for add new exercise in the database
    */
    AddexercisePage.prototype.addExercise = function () {
        var _this = this;
        this.exerciseData.addExercise(this.newExerciseForm.value.name, this.newExerciseForm.value.pr, this.newExerciseForm.value.type, this.newExerciseForm.value.unit).then(function () {
            _this.navCtrl.setRoot(ExercisesPage);
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
    AddexercisePage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'addexercise.html'
                },] },
    ];
    /** @nocollapse */
    AddexercisePage.ctorParameters = [
        { type: NavController, },
        { type: FormBuilder, },
        { type: LoadingController, },
        { type: ExerciseData, },
        { type: AlertController, },
    ];
    return AddexercisePage;
}());
//# sourceMappingURL=addexercise.js.map