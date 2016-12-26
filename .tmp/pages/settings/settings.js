import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the SettingsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var SettingsPage = (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'settings.html'
                },] },
    ];
    /** @nocollapse */
    SettingsPage.ctorParameters = [
        { type: NavController, },
    ];
    return SettingsPage;
}());
//# sourceMappingURL=settings.js.map