import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DBservice} from "../../providers/DataBase.service";
import {FirebaseListObservable} from "angularfire2";

/*
  Generated class for the Perfil page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {


  uid:any;
  profile: FirebaseListObservable<any>;
  categorias: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DBservice) {
    this.uid=localStorage.getItem("useruid");
    this.profile = this.db.getProfile(this.uid);
  }

  comprobar(){
    console.log(this.profile);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
