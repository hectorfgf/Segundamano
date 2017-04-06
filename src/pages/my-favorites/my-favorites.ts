import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DBservice} from "../../providers/DataBase.service";
import {ArticlePage} from "../article/article";

/*
  Generated class for the MyFavorites page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-favorites',
  templateUrl: 'my-favorites.html'
})
export class MyFavoritesPage {

  arrayarticulos = [];
  user:any;
  i=0;

  constructor(public navCtrl: NavController,private db: DBservice) {
    localStorage.getItem("useruid") ? this.user = localStorage.getItem("useruid") : this.user = null;
    this.db.getFavUser(this.user).subscribe((snapshots) => {
      snapshots.forEach(snapshot => {
        this.db.getArticles2().subscribe(snapshots2 => {
          snapshots2.forEach(snapshot2 => {
            if(snapshot2.key == snapshot.val()) {
              this.arrayarticulos[this.i] = {
                categoria: snapshot2.val().categoria,
                descripcion: snapshot2.val().descripcion,
                lugar: snapshot2.val().lugar,
                precio: snapshot2.val().precio,
                titulo: snapshot2.val().titulo,
                imagen: snapshot2.val().imagen,
                key: snapshot2.key
              }
              this.i = this.i + 1;
            };
          });
        });
      });
    });
  }

  articulo(key: any){
    this.navCtrl.push(ArticlePage, key);
  }

}
