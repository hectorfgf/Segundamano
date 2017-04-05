import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DBservice} from "../../providers/DataBase.service";
import {Page1} from "../page1/page1";

/*
  Generated class for the CrearCuenta page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
    this.db.createNewUser(form.vale.name,form.value.email,form.value.password,form.value.telefono).then(data => {
      if (data){
        console.log("cuenta creada");
      }
    });

  }

}
