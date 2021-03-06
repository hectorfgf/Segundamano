import { Component } from '@angular/core';
import {NavController, NavParams, AlertController, Platform} from 'ionic-angular';
import {DBservice} from "../../providers/DataBase.service";
import {FirebaseListObservable} from "angularfire2";

import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from 'ionic-native';

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
  base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform, private db: DBservice, public alertCtrl: AlertController,public domSanitizer: DomSanitizer) {
    this.uid=localStorage.getItem("useruid");
    this.profile = this.db.getProfile(this.uid);
  }
  takePicture(): void {
    this.platform.ready().then(() => {
      const options: CameraOptions = {
        destinationType: Camera.DestinationType.DATA_URL,
        quality: 75
      };
      Camera.getPicture(options).then((imageData) => {
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
        this.db.changePhoto(this.base64Image,this.uid);
      }, (error) => {
        console.log(error);
      });
    });
  }
  selecPicture(){
    this.platform.ready().then(() => {
      Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 1000,
        targetHeight: 1000
      }).then((imagen) => {
        console.log(imagen);
        this.base64Image = "data:image/jpeg;base64," + imagen;
        this.db.changePhoto(this.base64Image, this.uid);
      }, (err) => {
        console.log(err);
      });
    });
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

  changeImage(){
    let popup4 = this.alertCtrl.create({
      title: 'Cambiar imagen de perfil',
      message: 'Toma la nueva foto',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Tomar foto',
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: 'Seleccionar foto',
          handler: () => {
            this.selecPicture();
          }
        }
      ]
    });
    popup4.present();
  }
}
