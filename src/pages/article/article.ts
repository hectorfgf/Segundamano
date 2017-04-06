import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from "angularfire2";

/*
  Generated class for the Article page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-article',
  templateUrl: 'article.html'
})
export class ArticlePage {

  anuncio: any;
  informacion: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase: AngularFire) {
    this.anuncio = this.navParams.data;
    this.informacion = this.firebase.database.list('/articulos');


  }

  favoritos(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage: '+ this.anuncio);

  }


}
