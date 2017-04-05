import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DBservice} from "../../providers/DataBase.service";
import {Page1} from "../page1/page1";


@Component({
  selector: 'page-crear-cuenta',
  templateUrl: 'crear-cuenta.html'
})
export class CrearCuentaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DBservice) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearCuentaPage');
  }
  createNewUser(form:any){
    this.db.createNewUser(form.value.email,form.value.password).then(data => {
          this.db.addUserData(data,form.value.name,form.value.email, form.value.telefono).then(data2 => {
            if(data2){
              this.navCtrl.setRoot(Page1);
            }
          })
    });
  }

}
