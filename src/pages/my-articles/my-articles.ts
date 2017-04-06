import { Component } from '@angular/core';
import {NavController,} from 'ionic-angular';

import {DBservice} from '../../providers/providers';
import {FirebaseListObservable} from "angularfire2";
import {AddArticlePage} from "../add-article/add-article";
import {ArticlePage} from "../article/article";

@Component({
  selector: 'page-my-articles',
  templateUrl: 'my-articles.html'
})
export class MyArticlesPage {

  arrayarticulos = [];
  user:any;
  i=0;

  constructor(public navCtrl: NavController,private db: DBservice) {
    this.arrayarticulos = [];
    this.i = 0;
    localStorage.getItem("useruid") ? this.user = localStorage.getItem("useruid") : this.user = null;
    this.db.getArticlesUser(this.user).subscribe((snapshots) => {
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
                key: snapshot2.key,
                key2: snapshot.key
              }
              this.i = this.i + 1;
            };
          });
        });
      });
    });
  }

  remove(myarticle, article){
    this.db.removeArticle(article);
    this.db.removeMyArticle(myarticle,this.user);
    this.navCtrl.setRoot(MyArticlesPage);
  }
  addArticulo(){
    this.navCtrl.push(AddArticlePage);
  }
  articulo(key: any){
    this.navCtrl.push(ArticlePage, key);
  }
}
