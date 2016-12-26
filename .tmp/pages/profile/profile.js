import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var ProfilePage = (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfilePage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'profile.html',
                },] },
    ];
    /** @nocollapse */
    ProfilePage.ctorParameters = [
        { type: NavController, },
    ];
    return ProfilePage;
}());
//# sourceMappingURL=profile.js.map