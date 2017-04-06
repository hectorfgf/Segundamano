import { Component } from '@angular/core';
import {NavController,} from 'ionic-angular';

import {DBservice} from '../../providers/providers';
import {FirebaseListObservable} from "angularfire2";
import {AddArticlePage} from "../add-article/add-article";

@Component({
  selector: 'page-my-articles',
  templateUrl: 'my-articles.html'
})
export class MyArticlesPage {

  articulos: FirebaseListObservable<any>;
  articulos2: FirebaseListObservable<any>;
  arrayarticulos = [];
  user:any;
  i=0;

  constructor(public navCtrl: NavController,private db: DBservice) {
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
                imagen: snapshot2.val().imagen
              }
              this.i = this.i + 1;
              console.log(this.arrayarticulos);
            };
          })
        });
      });
    });

  }

  probar(){
    console.log("articulos: " + this.articulos);
  }
  addArticulo(){
    this.navCtrl.push(AddArticlePage);
  }

}
