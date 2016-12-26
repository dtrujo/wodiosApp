import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthData } from '../../providers/auth-data';
import { StorageData } from '../../providers/storage-data';
import firebase from 'firebase';
/**
  Class for the HomePage page.
*/
export var HomePage = (function () {
    /**
      Constructor
    */
    function HomePage(navCtrl, ngZone, storageData, authData) {
        this.navCtrl = navCtrl;
        this.ngZone = ngZone;
        this.storageData = storageData;
        this.authData = authData;
        this.currentUser = '';
    }
    /**
      [ngOnInit description]
      This event fire any time when user access to the view
    */
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        // create component to detect is user is loggin or not
        firebase.auth().onAuthStateChanged(function (user) {
            _this.ngZone.run(function () {
                if (user) {
                    _this.authData.user(user.uid).subscribe(function (data) {
                        _this.ngZone.run(function () {
                            _this.currentUser = data;
                        });
                    });
                }
                else {
                    _this.currentUser = '';
                }
            });
        });
    };
    /**
      [ngOnDestroy description]
      This event fire any time when user turn down the view
    */
    HomePage.prototype.ngOnDestroy = function () {
        this.currentUser = '';
    };
    /**
      [logOut description]
    */
    HomePage.prototype.logOut = function () {
        var _this = this;
        this.authData.logoutUser().then(function () {
            _this.navCtrl.setRoot(LoginPage);
        });
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
        { type: NgZone, },
        { type: StorageData, },
        { type: AuthData, },
    ];
    return HomePage;
}());
//# sourceMappingURL=home.js.map