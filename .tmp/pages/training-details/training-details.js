import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ObjectToArray } from '../../pipes/objectToArray';
import { SessionDetailsPage } from '../session-details/session-details';
import { AddSessionPage } from '../add-session/add-session';
export var TrainingDetailsPage = (function () {
    /**
      Constructor
    */
    function TrainingDetailsPage(navCtrl, objectToArray, params) {
        this.navCtrl = navCtrl;
        this.objectToArray = objectToArray;
        this.params = params;
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
    TrainingDetailsPage.prototype.goToAddSession = function () {
        this.navCtrl.push(AddSessionPage, { training: this.training });
    };
    /**
      [sessionDetails description]
      go to training details page
    */
    TrainingDetailsPage.prototype.sessionDetails = function () {
        this.navCtrl.push(SessionDetailsPage);
    };
    /**
    */
    TrainingDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('Hello TrainingDetailsPage Page');
    };
    TrainingDetailsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-training-details',
                    templateUrl: 'training-details.html'
                },] },
    ];
    /** @nocollapse */
    TrainingDetailsPage.ctorParameters = [
        { type: NavController, },
        { type: ObjectToArray, },
        { type: NavParams, },
    ];
    return TrainingDetailsPage;
}());
//# sourceMappingURL=training-details.js.map