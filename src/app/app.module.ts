import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {DBservice} from '../providers/providers';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import {LoginPage} from "../pages/login/login";
import {CrearCuentaPage} from "../pages/crear-cuenta/crear-cuenta";
import {PerfilPage} from "../pages/perfil/perfil";
import {AddArticlePage} from "../pages/add-article/add-article";
import {MyArticlesPage} from "../pages/my-articles/my-articles";
import {ArticlePage} from "../pages/article/article";
import {MyFavoritesPage} from "../pages/my-favorites/my-favorites";


export const firebaseConfig = {
  apiKey: "AIzaSyBuwR5hB4awktamkaZ1BqoHSYzVdAHfngE",
  authDomain: "daw2-1cd21.firebaseapp.com",
  databaseURL: "https://daw2-1cd21.firebaseio.com",
  projectId: "daw2-1cd21",
  storageBucket: "daw2-1cd21.appspot.com",
  messagingSenderId: "753805666985"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    Page1,
    LoginPage,
    CrearCuentaPage,
    PerfilPage,
    AddArticlePage,
    MyArticlesPage,
    ArticlePage,
    MyFavoritesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    LoginPage,
    CrearCuentaPage,
    PerfilPage,
    AddArticlePage,
    MyArticlesPage,
    ArticlePage,
    MyFavoritesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DBservice
  ]
})
export class AppModule {}
