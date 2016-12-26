import { Component, ViewChild, NgZone } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { FriendsPage } from '../pages/friends/friends';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  pages: Array<{title: string, component: any}>;

  constructor( platform: Platform,
               public ngZone: NgZone,
               private menu: MenuController) {

    // menu pages
    this.pages = [
        { title: 'Home', component: TabsPage },
        { title: 'Friends', component: FriendsPage },
        { title: 'About', component: AboutPage },
    ];

    // firebase object
    var config = {
      apiKey: "AIzaSyC3T30cujg9cW3WENjIaY3hE6fALKorCuw",
      authDomain: "wodapp-d6da4.firebaseapp.com",
      databaseURL: "https://wodapp-d6da4.firebaseio.com",
      storageBucket: "wodapp-d6da4.appspot.com",
    };

    // initialize firebase
    firebase.initializeApp(config);

    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      // create component to detect is user is loggin or not
      firebase.auth().onAuthStateChanged((user) => {
        this.ngZone.run(() => {
          if (user)
            this.rootPage = TabsPage;
          else
            this.rootPage = LoginPage;
        });
      });

      // hide SplashScreen when the platform is ready
      this.hideSplashScreen();
      
    });
  }

  /**
    [openPage description]
    openPage control hidde element when click
  */
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  /**
    [hideSplashScreen description]
    control white screen after animation
  */
  hideSplashScreen() {
    if (Splashscreen) {
      setTimeout(() => {
        Splashscreen.hide();
      }, 100);
    }
  }
}
