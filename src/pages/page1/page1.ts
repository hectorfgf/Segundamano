import { Component } from '@angular/core';
import {NavController, AlertController,} from 'ionic-angular';

import {DBservice} from '../../providers/providers';
import {FirebaseListObservable} from "angularfire2";
import {AddArticlePage} from "../add-article/add-article";
import {ArticlePage} from "../article/article";


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  articulos: FirebaseListObservable<any>;
  user:any;
  private ok: boolean;
  private categoria: any;

  constructor(public navCtrl: NavController,private db: DBservice,public alertCtrl: AlertController) {
    this.articulos = this.db.getArticles();
    localStorage.getItem("useruid") ? this.user = localStorage.getItem("useruid") : this.user = null;
    this.ok = false;
  }

  probar(){
    console.log("articulos: " + this.articulos);
  }
  addArticulo(){
    this.navCtrl.push(AddArticlePage);
  }

  articulo(key: any){
    this.navCtrl.push(ArticlePage, key);
  }
  categorias(){
    let alert = this.alertCtrl.create({
      title: 'Categorias',
      inputs: [
        {
          type: 'radio',
          label: 'Audio',
          value: 'audio',
          checked: true
        },
        {
          type: 'radio',
          label: 'Coches',
          value: 'coches'
        },
        {
          type: 'radio',
          label: 'Consolas',
          value: 'consolas'
        },
        {
          type: 'radio',
          label: 'Motos',
          value: 'motos'
        },
        {
          type: 'radio',
          label: 'Telefonia',
          value: 'telefonia'
        },
        {
          type: 'radio',
          label: 'Informática',
          value: 'informatica'
        },
        {
          type: 'radio',
          label: 'Otros',
          value: 'otros'
        },
        {
          type: 'radio',
          label: 'Todas',
          value: 'todas'
        }
      ],
      buttons : [
        {
          text: 'Cancel'
        },
        {
          text: 'Ok',
          handler: (data: any) => {
            this.ok = false;
            if (data != 'todas'){
              this.ok = true;
              this.categoria = data;
              console.log('Radio data:', this.categoria);
            }
          }
        }
      ]
    });

    alert.present();
  }
}

