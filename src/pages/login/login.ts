import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DBservice} from "../../providers/DataBase.service";
import {Page2} from "../page2/page2";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DBservice) {}

  login(form: any){
    this.db.login(form.value.email,form.value.password).then(data => {
      if (data){
        this.navCtrl.push(Page2);
      }
    });
  }
  logout(){
    this.db.deslogueo();
  }

}
