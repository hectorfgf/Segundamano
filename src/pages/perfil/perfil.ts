import { Component } from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
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


  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DBservice, public alertCtrl: AlertController) {
    this.uid=localStorage.getItem("useruid");
    this.profile = this.db.getProfile(this.uid);
  }

  comprobar(){
    console.log(this.profile);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  changeEmail(){
    let popup = this.alertCtrl.create();
    popup.setTitle('El correo no se puede modificar');
    popup.addButton("Volver");
    popup.present();
  }

  changeName(){
    let popup2 = this.alertCtrl.create({
      title: 'Cambiar nombre de usuario',
      message: 'Introduzca el nuevo nombre',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Cambiar nombre',
          handler: cambio => {
            this.db.changeName(cambio.nombre, this.uid);
          }
        }
      ]
    });
    popup2.present();
  }
  changePhone(){
    let popup3 = this.alertCtrl.create({
      title: 'Cambiar numero de telefono',
      message: 'Introduzca el nuevo numero',
      inputs: [
        {
          name: 'numero',
          type: 'number',
          placeholder: '928928928'
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Cambiar numero',
          handler: cambio => {
            this.db.changePhone(cambio.numero, this.uid);
          }
        }
      ]
    });
    popup3.present();
  }

}
