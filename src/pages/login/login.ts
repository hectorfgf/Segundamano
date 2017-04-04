import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DBservice} from "../../providers/DataBase.service";

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DBservice) {}

  login(form: any){
    var resp = this.db.login(form.value.email,form.value.password);
    console.log(resp);
  }
  logout(){
    this.db.deslogueo();
  }

}
