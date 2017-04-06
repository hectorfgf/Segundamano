import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DBservice} from "../../providers/DataBase.service";
import {Page1} from "../page1/page1";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  uid:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DBservice) {

    localStorage.getItem("useruid") ? this.uid = localStorage.getItem("useruid") : this.uid = null;
    if(this.uid != null){
      this.navCtrl.setRoot(Page1);
    }
  }

  login(form: any){
    this.db.login(form.value.email,form.value.password).then(data => {
      if (data){
        this.navCtrl.setRoot(Page1);
      }
    });
  }
  logout(){
    this.db.deslogueo();
    this.navCtrl.setRoot(Page1);

  }

}
