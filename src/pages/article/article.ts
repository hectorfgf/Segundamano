import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable} from "angularfire2";
import {DBservice} from "../../providers/DataBase.service";


@Component({
  selector: 'page-article',
  templateUrl: 'article.html'
})
export class ArticlePage {

  anuncio: any;
  informacion: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DBservice) {
    this.anuncio = this.navParams.data;
    this.informacion = this.db.getArticles();
  }

  favoritos(){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage: '+ this.anuncio);

  }


}
