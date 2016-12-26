import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { ContactPage } from '../pages/contact/contact';
import { FriendsPage } from '../pages/friends/friends';
import { ProfilePage } from '../pages/profile/profile';
import { ExercisesPage } from '../pages/exercises/exercises';
import { SignupPage } from '../pages/signup/signup';
import { ResetPasswordPage } from '../pages/resetpassword/resetpassword';
import { PrPage } from '../pages/pr/pr';
import { AddexercisePage } from '../pages/addexercise/addexercise';
import { FriendDetails } from '../pages/friend-details/friend-details';
import { NotebookPage } from '../pages/notebook/notebook';
import { TrainingDetailsPage } from '../pages/training-details/training-details';
import { SessionDetailsPage } from '../pages/session-details/session-details';
import { AddTrainingPage } from '../pages/add-training/add-training';
import { AddSessionPage } from '../pages/add-session/add-session';

import { AuthData } from '../providers/auth-data';
import { ExerciseData } from '../providers/exercise-data';
import { StorageData } from '../providers/storage-data';
import { FriendsData } from '../providers/friends-data';
import { TrainingData } from '../providers/training-data';

import { ObjectToArray } from '../pipes/objectToArray';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    FriendsPage,
    HomePage,
    LoginPage,
    SettingsPage,
    ProfilePage,
    TabsPage,
    ExercisesPage,
    SignupPage,
    ResetPasswordPage,
    PrPage,
    AddexercisePage,
    FriendDetails,
    NotebookPage,
    TrainingDetailsPage,
    SessionDetailsPage,
    AddTrainingPage,
    AddSessionPage,
    ObjectToArray
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    FriendsPage,
    HomePage,
    LoginPage,
    SettingsPage,
    ProfilePage,
    TabsPage,
    ExercisesPage,
    SignupPage,
    ResetPasswordPage,
    PrPage,
    AddexercisePage,
    FriendDetails,
    NotebookPage,
    TrainingDetailsPage,
    SessionDetailsPage,
    AddTrainingPage,
    AddSessionPage,
    ObjectToArray
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthData,
    TrainingData,
    ExerciseData,
    StorageData,
    FriendsData
  ]
})
export class AppModule {}
