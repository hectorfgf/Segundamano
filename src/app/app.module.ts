import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {DBservice} from '../providers/providers';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';


export const firebaseConfig = {
  apiKey: "AIzaSyCoBphaSZMIxIRGpe76PwQi3T3gvtLnfoo",
  authDomain: "segundamano-138da.firebaseapp.com",
  databaseURL: "https://segundamano-138da.firebaseio.com",
  storageBucket: "segundamano-138da.appspot.com",
  messagingSenderId: "338357805392"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DBservice
  ]
})
export class AppModule {}
