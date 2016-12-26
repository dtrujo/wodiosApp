import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
/**
  Generated class for the ResetpasswordPage page.
*/
export var ResetPasswordPage = (function () {
    /**
      Constructor
    */
    function ResetPasswordPage(navCtrl, formBuilder, nav, authData, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.authData = authData;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.resetPasswordForm = formBuilder.group({
            email: ['', Validators.required],
        });
    }
    /**
      [resetPassword description]
    */
    ResetPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.resetPasswordForm.valid) {
            console.log(this.resetPasswordForm.value);
        }
        else {
            this.authData.resetPassword(this.resetPasswordForm.value.email).then(function (user) {
                var alert = _this.alertCtrl.create({
                    message: "We just sent you a reset link to your email",
                    buttons: [{
                            text: "Ok",
                            role: 'cancel',
                            handler: function () {
                                _this.nav.pop();
                            }
                        }]
                });
                alert.present();
            }, function (error) {
                var errorMessage = error.message;
                var errorAlert = _this.alertCtrl.create({
                    message: errorMessage,
                    buttons: [{
                            text: "Ok",
                            role: 'cancel'
                        }]
                });
                errorAlert.present();
            });
        }
    };
    ResetPasswordPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'resetpassword.html'
                },] },
    ];
    /** @nocollapse */
    ResetPasswordPage.ctorParameters = [
        { type: NavController, },
        { type: FormBuilder, },
        { type: NavController, },
        { type: AuthData, },
        { type: LoadingController, },
        { type: AlertController, },
    ];
    return ResetPasswordPage;
}());
//# sourceMappingURL=resetpassword.js.map