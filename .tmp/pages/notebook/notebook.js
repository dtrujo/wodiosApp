import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TrainingDetailsPage } from '../training-details/training-details';
import { AddTrainingPage } from '../add-training/add-training';
import { TrainingData } from '../../providers/training-data';
/**
  Class for the AddTrainingPage page.
*/
export var NotebookPage = (function () {
    /**
      Constructor
    */
    function NotebookPage(navCtrl, trainingData, ngZone) {
        this.navCtrl = navCtrl;
        this.trainingData = trainingData;
        this.ngZone = ngZone;
        this.trainings = [];
    }
    /**
      [ngOnInit description]
      This event fire any time when user access to the view
    */
    NotebookPage.prototype.ngOnInit = function () {
        var _this = this;
        // get all trainings using an observer and add
        // trainings using push method with the value
        // retrieved of firebase
        this.trainingData.trainings().subscribe(function (training) {
            _this.ngZone.run(function () {
                console.log(training);
                _this.trainings.push(training);
            });
        });
    };
    /**
    */
    NotebookPage.prototype.ionViewDidLoad = function () {
        console.log('Hello NotebookPage Page');
    };
    /**
      [goToAddTraining description]
      go to add traning page
    */
    NotebookPage.prototype.goToAddTraning = function () {
        this.navCtrl.push(AddTrainingPage);
    };
    /**
      [trainingDetails description]
      go to training details page
    */
    NotebookPage.prototype.trainingDetails = function (training) {
        this.navCtrl.push(TrainingDetailsPage, { training: training });
    };
    NotebookPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-notebook',
                    templateUrl: 'notebook.html'
                },] },
    ];
    /** @nocollapse */
    NotebookPage.ctorParameters = [
        { type: NavController, },
        { type: TrainingData, },
        { type: NgZone, },
    ];
    return NotebookPage;
}());
//# sourceMappingURL=notebook.js.map