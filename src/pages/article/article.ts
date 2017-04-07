import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable} from "angularfire2";
import {DBservice} from "../../providers/DataBase.service";
import {Page1} from "../page1/page1";
import {MyFavoritesPage} from "../my-favorites/my-favorites";


@Component({
  selector: 'page-article',
  templateUrl: 'article.html'
})
export class ArticlePage {

  anuncio: any;
  informacion: FirebaseListObservable<any>;
  user:any;
  contacto: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DBservice) {
    this.anuncio = this.navParams.data;
    localStorage.getItem("useruid") ? this.user = localStorage.getItem("useruid") : this.user = null;
    this.informacion = this.db.getArticles();
    this.contacto = this.db.getContact();
  }
  addfav(){
    this.db.addFav(this.anuncio, this.user).then((data)=>{
      if(data){
        this.navCtrl.setRoot(MyFavoritesPage);
      }
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage: '+ this.anuncio);
  }

}
