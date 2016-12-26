import { Component, NgZone } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { PrPage } from '../pr/pr';
import { AddexercisePage } from '../addexercise/addexercise';
import { ExerciseData } from '../../providers/exercise-data';
export var ExercisesPage = (function () {
    /**
      Constructor
    */
    function ExercisesPage(navCtrl, modalCtrl, ngZone, exerciseData, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.ngZone = ngZone;
        this.exerciseData = exerciseData;
        this.alertCtrl = alertCtrl;
        this.exercises_weight = [];
        this.exercises_aerobic = [];
        this.exercises_gymnastic = [];
        this.type = "Weight";
        // add new method to check if one node has been
        // modified in firebase and later update view. We use
        // observer to subscribe at the event
        this.exerciseData.update().subscribe(function (data) {
            _this.ngZone.run(function () {
                // control list
                switch (data.Type) {
                    case "Weight":
                        _this.exercises_weight.forEach(function (exercise) {
                            if (data.id == exercise.id) {
                                exercise.Pr = data.Pr;
                                exercise.Name = data.Name;
                                exercise.Type = data.Type;
                                exercise.Unit = data.Unit;
                            }
                        });
                        break;
                    case "Aerobic":
                        _this.exercises_aerobic.forEach(function (exercise) {
                            if (data.id == exercise.id) {
                                exercise.Pr = data.Pr;
                                exercise.Name = data.Name;
                                exercise.Type = data.Type;
                                exercise.Unit = data.Unit;
                            }
                        });
                        break;
                    case "Gymnastic":
                        _this.exercises_gymnastic.forEach(function (exercise) {
                            if (data.id == exercise.id) {
                                exercise.Pr = data.Pr;
                                exercise.Name = data.Name;
                                exercise.Type = data.Type;
                                exercise.Unit = data.Unit;
                            }
                        });
                        break;
                    default:
                        console.log('default');
                }
            });
        }, function (err) {
            console.error(err);
        });
        // remove of the exercise'list the value
        // which was removed in firebase.
        this.subscription = this.exerciseData.remove().subscribe(function (id) {
            var i = -1;
            var e = { 'index': -1, "type": '' };
            _this.exercises_weight.forEach(function (exercise) {
                if (id == exercise.id)
                    e = { 'index': i, "type": exercise.Type };
                i++;
            });
            i = -1;
            _this.exercises_aerobic.forEach(function (exercise) {
                if (id == exercise.id)
                    e = { 'index': i, "type": exercise.Type };
                i++;
            });
            i = -1;
            _this.exercises_gymnastic.forEach(function (exercise) {
                if (id == exercise.id)
                    e = { 'index': i, "type": exercise.Type };
                i++;
            });
            switch (e.type) {
                case "Weight":
                    _this.exercises_weight.splice(e.index + 1, 1);
                    break;
                case "Aerobic":
                    _this.exercises_aerobic.splice(e.index + 1, 1);
                    break;
                case "Gymnastic":
                    _this.exercises_gymnastic.splice(e.index + 1, 1);
                    break;
            }
        }, function (err) {
            console.error(err);
        });
    }
    /**
      [ngOnInit description]
      This event fire any time when user access to the view
    */
    ExercisesPage.prototype.ngOnInit = function () {
        var _this = this;
        // get all exercises using an observer and add
        // exercises using push method with the value
        // retrieved of firebase
        this.exerciseData.exercises().subscribe(function (exercise) {
            _this.ngZone.run(function () {
                // control list
                switch (exercise.Type) {
                    case "Weight":
                        _this.exercises_weight.push(exercise);
                        break;
                    case "Aerobic":
                        _this.exercises_aerobic.push(exercise);
                        break;
                    case "Gymnastic":
                        _this.exercises_gymnastic.push(exercise);
                        break;
                    default:
                        console.log('default');
                }
            });
        });
    };
    /**
      [ngOnDestroy description]
    */
    ExercisesPage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    /**
      [exerciseTapped description]
      When user click over event we need to launch modal view
      to complete action, change pr value or cancel.
      @param event    [which fire]
      @param exercise [exercise pressed]
    */
    ExercisesPage.prototype.exerciseTapped = function (event, exercise) {
        var modal = this.modalCtrl.create(PrPage, { "exercise": exercise });
        modal.present();
        //this.navCtrl.push( PrPage, { "exercise": exercise } );
    };
    /**
      [removeExercise description]
      remove the exercise which selected
    */
    ExercisesPage.prototype.removeExercise = function (exercise) {
        this.exerciseData.removeExercise(exercise.id);
    };
    /**
      [goToAddExercise description]
      go to add exercise page
    */
    ExercisesPage.prototype.goToAddExercise = function () {
        this.navCtrl.push(AddexercisePage);
    };
    /**
      [ionViewWillEnter description]
      enter in this view every time when the view is loaded
    */
    ExercisesPage.prototype.ionViewWillEnter = function () { };
    ExercisesPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'exercises.html'
                },] },
    ];
    /** @nocollapse */
    ExercisesPage.ctorParameters = [
        { type: NavController, },
        { type: ModalController, },
        { type: NgZone, },
        { type: ExerciseData, },
        { type: AlertController, },
    ];
    return ExercisesPage;
}());
//# sourceMappingURL=exercises.js.map