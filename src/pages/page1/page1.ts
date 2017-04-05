import { Component } from '@angular/core';
import {NavController,} from 'ionic-angular';

import {DBservice} from '../../providers/providers';
import {FirebaseListObservable} from "angularfire2";
import {AddArticlePage} from "../add-article/add-article";


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  articulos: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,private db: DBservice) {
    this.articulos = this.db.getArticles();
  }

  probar(){
    console.log("articulos: " + this.articulos);
  }

  addArticulo(){
    this.navCtrl.push(AddArticlePage);
  }

}

