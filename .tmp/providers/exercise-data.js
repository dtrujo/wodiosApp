import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
export var ExerciseData = (function () {
    /**
      constructor
    */
    function ExerciseData(http) {
        this.http = http;
        this.fireAuth = firebase.auth();
        this.userProfile = firebase.database().ref('/users');
    }
    /**
      [exercises description]
      Get all exercises in the firebase database using observer
      to detect when element has been added or modified.
    */
    ExerciseData.prototype.exercises = function () {
        var _this = this;
        return Observable.create(function (observer) {
            var userId = _this.fireAuth.currentUser.uid;
            _this.exercisesRef = _this.userProfile.child(userId + '/exercises');
            var listener = _this.exercisesRef.on('child_added', function (snapshot) {
                var data = snapshot.val();
                data.id = snapshot.key;
                observer.next(data);
            }, observer.error);
            return function () {
                _this.exercisesRef.off('child_added', listener);
            };
        });
    };
    /**
      [remove description]
      add event to check when one node has been removed
    */
    ExerciseData.prototype.remove = function () {
        var _this = this;
        return Observable.create(function (observer) {
            var userId = _this.fireAuth.currentUser.uid;
            _this.exercisesRef = _this.userProfile.child(userId + '/exercises');
            var listener = _this.exercisesRef.on('child_removed', function (snapshot) {
                observer.next(snapshot.key);
            }, observer.error);
            return function () {
                _this.exercisesRef.off('child_removed', listener);
            };
        });
    };
    /**
      [update description]
      add event to check when one node has been updated
    */
    ExerciseData.prototype.update = function () {
        var _this = this;
        return Observable.create(function (observer) {
            var userId = _this.fireAuth.currentUser.uid;
            _this.exercisesRef = _this.userProfile.child(userId + '/exercises');
            var listener = _this.exercisesRef.on('child_changed', function (snapshot) {
                var value = snapshot.val();
                value.id = snapshot.key;
                observer.next(value);
            }, observer.error);
            return function () {
                _this.exercisesRef.off('child_changed', listener);
            };
        });
    };
    /**
      [updatePR description]
      update pr value using actual param.
    */
    ExerciseData.prototype.updatePr = function (exerciseId, newPr, type, unit) {
        var userId = this.fireAuth.currentUser.uid;
        // return updated value
        return this.userProfile.child(userId + '/exercises/' + exerciseId).update({
            Pr: newPr,
            Type: type,
            Unit: unit
        });
    };
    /**
      [addExercise description]
      add new exercise into exercise's list
    */
    ExerciseData.prototype.addExercise = function (name, pr, type, unit) {
        var userId = this.fireAuth.currentUser.uid;
        return this.userProfile.child(userId + '/exercises/').push({
            Name: name,
            Type: type,
            Unit: unit,
            Pr: pr,
            Date: new Date().toDateString()
        });
    };
    /**
      [removeExercise description]
      delete exercise of the list
    */
    ExerciseData.prototype.removeExercise = function (id) {
        var userId = this.fireAuth.currentUser.uid;
        this.userProfile.child(userId + '/exercises/' + id).remove();
        return true;
    };
    ExerciseData.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ExerciseData.ctorParameters = [
        { type: Http, },
    ];
    return ExerciseData;
}());
//# sourceMappingURL=exercise-data.js.map