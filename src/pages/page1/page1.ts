import { Component } from '@angular/core';
import {NavController,} from 'ionic-angular';

import {DBservice} from '../../providers/providers';
import {FirebaseListObservable, AngularFire} from "angularfire2";


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  articulos: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,private db: DBservice, public firebase: AngularFire) {

    this.articulos= firebase.database.list('/articulos');
    console.log("articulos: " + this.articulos);
  }

  probar(){
    console.log("articulos: " + this.articulos);
  }

}

