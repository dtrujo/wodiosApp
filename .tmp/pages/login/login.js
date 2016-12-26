import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { ResetPasswordPage } from '../resetpassword/resetpassword';
import { AuthData } from '../../providers/auth-data';
/**
   Class for the LoginPage page.
*/
export var LoginPage = (function () {
    /**
      Contructor
    */
    function LoginPage(navCtrl, formBuilder, loadingCtrl, authData, alertCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.authData = authData;
        this.alertCtrl = alertCtrl;
        this.loginForm = formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    /**
      [loginUser description]
      control login user calling firebase API
    */
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(function (auth) {
                _this.navCtrl.setRoot(TabsPage);
            }, function (error) {
                var alert = _this.alertCtrl.create({
                    message: error.message,
                    buttons: [{
                            text: "Ok",
                            role: 'cancel'
                        }]
                });
                alert.present();
            });
            var loading = this.loadingCtrl.create({
                dismissOnPageChange: true,
            });
            loading.present();
        }
    };
    /**
      [goToSignup description]
    */
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(SignupPage);
    };
    /**
      [goToResetPassword description]
    */
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push(ResetPasswordPage);
    };
    LoginPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'login.html'
                },] },
    ];
    /** @nocollapse */
    LoginPage.ctorParameters = [
        { type: NavController, },
        { type: FormBuilder, },
        { type: LoadingController, },
        { type: AuthData, },
        { type: AlertController, },
    ];
    return LoginPage;
}());
//# sourceMappingURL=login.js.map