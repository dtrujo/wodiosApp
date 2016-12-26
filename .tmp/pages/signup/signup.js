import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthData } from '../../providers/auth-data';
/**
  Generated class for the SignupPage page.
*/
export var SignupPage = (function () {
    /**
      Constructor
    */
    function SignupPage(navCtrl, formBuilder, authData, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.authData = authData;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        // validate form
        this.signupForm = formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
            username: ['', Validators.required],
            name: ['', Validators.required],
            surname: ['', Validators.required]
        });
    }
    /**
      [signupUser description]
    */
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.username, this.signupForm.value.name, this.signupForm.value.surname).then(function () {
                _this.navCtrl.setRoot(HomePage);
            }, function (error) {
                var errorMessage = error.message;
                var alert = _this.alertCtrl.create({
                    message: errorMessage,
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
    SignupPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'signup.html'
                },] },
    ];
    /** @nocollapse */
    SignupPage.ctorParameters = [
        { type: NavController, },
        { type: FormBuilder, },
        { type: AuthData, },
        { type: LoadingController, },
        { type: AlertController, },
    ];
    return SignupPage;
}());
//# sourceMappingURL=signup.js.map