import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import {DBservice} from '../providers/providers';
import {LoginPage} from "../pages/login/login";
import {LogoutComponent} from "../components/logout/logout";
import {CrearCuentaPage} from "../pages/crear-cuenta/crear-cuenta";
import {PerfilPage} from "../pages/perfil/perfil";

@Component({
  templateUrl: 'app.html',
  providers: [
    DBservice
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  user: string[] = [null];
  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private db: DBservice) {
    this.initializeApp();
    localStorage.getItem("useruid") ? this.user[0] = localStorage.getItem("useruid") : this.user[0] = null;
    this.rootPage = Page1;
    // used for an example of ngFor and navigation
    if (this.user[0] == null) {
      this.pages = [
        { title: 'Login', component: LoginPage },
        { title: 'Articulos en venta', component: Page1 },
        { title: 'Page Two', component: Page2 },
        { title: 'Crear cuenta', component: CrearCuentaPage}
      ];
    }else{
      this.pages = [
        { title: 'Perfil', component: PerfilPage },
        { title: 'Articulos en venta', component: Page1 },
        { title: 'Page Two', component: Page2 }
      ];
    }


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    localStorage.getItem("useruid") ? this.user[0] = localStorage.getItem("useruid") : this.user[0] = null;
    if (this.user[0] == null) {
      this.pages = [
        { title: 'Login', component: LoginPage },
        { title: 'Articulos en venta', component: Page1 },
        { title: 'Page Two', component: Page2 },
        { title: 'Crear cuenta', component: CrearCuentaPage}
      ];
    }else{
      this.pages = [
        { title: 'Perfil', component: PerfilPage },
        { title: 'Articulos en venta', component: Page1 },
        { title: 'Page Two', component: Page2 }
      ];
    }
  }
  logout(){
    this.db.deslogueo();
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Articulos en venta', component: Page1 },
      { title: 'Page Two', component: Page2 },
      { title: 'Crear cuenta', component: CrearCuentaPage}
    ];
    this.nav.setRoot(Page1);
  }
}
