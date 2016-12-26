import { Injectable, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthData } from './auth-data';
import firebase from 'firebase';
export var FriendsData = (function () {
    /**
      constructor
    */
    function FriendsData(http, ngZone, authData) {
        this.http = http;
        this.ngZone = ngZone;
        this.authData = authData;
        this.fireAuth = firebase.auth();
        this.userProfile = firebase.database().ref('/users');
    }
    /**
      [friends description]
      Get all friends in the firebase database using observer
      to detect when element has been added or modified.
    */
    FriendsData.prototype.friends = function () {
        var _this = this;
        return Observable.create(function (observer) {
            var userId = _this.fireAuth.currentUser.uid;
            _this.friendsRef = _this.userProfile.child(userId + '/friends');
            var listener = _this.friendsRef.on('child_added', function (snapshot) {
                // get friend information
                _this.authData.user(snapshot.key).subscribe(function (data) {
                    // pass value to the observer
                    observer.next(data);
                });
            }, observer.error);
            return function () {
                _this.friendsRef.off('child_added', listener);
            };
        });
    };
    FriendsData.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FriendsData.ctorParameters = [
        { type: Http, },
        { type: NgZone, },
        { type: AuthData, },
    ];
    return FriendsData;
}());
//# sourceMappingURL=friends-data.js.map