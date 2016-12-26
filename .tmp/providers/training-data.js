import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
/*
  Class for the TrainingData provider.
*/
export var TrainingData = (function () {
    /**
      [constructor description]
    */
    function TrainingData(http) {
        this.http = http;
        this.fireAuth = firebase.auth();
        this.trainingsRef = firebase.database().ref('/trainings');
    }
    /**
      [trainings description]
      Get all trainings in the firebase database using observer
      to detect when element has been added or modified.
    */
    TrainingData.prototype.trainings = function () {
        var _this = this;
        return Observable.create(function (observer) {
            // get actual user
            var userId = _this.fireAuth.currentUser.uid;
            // filter all training specific user
            //this.trainingsRefByUser = this.trainingsRef.child( '/User/' + userId );
            // get child training
            var listener = _this.trainingsRef.orderByChild("User").equalTo(userId).on('child_added', function (snapshot) {
                var data = snapshot.val();
                data.id = snapshot.key;
                observer.next(data);
            }, observer.error);
            return function () {
                _this.trainingsRef.off('child_added', listener);
            };
        });
    };
    /**
      [addTraining description]
      add new training into notebook's list
    */
    TrainingData.prototype.addTraining = function (title, description, date) {
        var userId = this.fireAuth.currentUser.uid;
        return this.trainingsRef.push({
            Title: title,
            Description: description,
            Date: date,
            User: userId
        });
    };
    /**
      [addSession description]
      add new session into training's list
    */
    TrainingData.prototype.addSession = function (trainingId, title, description, hour) {
        return this.trainingsRef.child(trainingId + "/Sessions").push({
            Title: title,
            Description: description,
            Hour: hour
        });
    };
    TrainingData.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TrainingData.ctorParameters = [
        { type: Http, },
    ];
    return TrainingData;
}());
//# sourceMappingURL=training-data.js.map