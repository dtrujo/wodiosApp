import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
export var StorageData = (function () {
    /**
    *
    */
    function StorageData(http) {
        this.http = http;
        this.storageRef = firebase.storage().ref('profile');
    }
    /**
      [exercises description]
      Get all exercises in the firebase database using observer
      to detect when element has been added or modified.
      @param  {string} src [image name]
    */
    StorageData.prototype.image = function (src) {
        var _this = this;
        return Observable.create(function (observer) {
            // Get the download URL for 'profiles folder'
            // This can be inserted into an <img> tag
            // This can also be downloaded directly
            _this.storageRef.child(src).getDownloadURL().then(function (url) {
                observer.next(url);
            }).catch(function (error) {
                observer.next(error);
            });
            // Any cleanup logic might go here
            return function () { return console.log('disposed'); };
        });
    };
    StorageData.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    StorageData.ctorParameters = [
        { type: Http, },
    ];
    return StorageData;
}());
//# sourceMappingURL=storage-data.js.map