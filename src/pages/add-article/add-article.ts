import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {DBservice} from "../../providers/DataBase.service";
import {Page1} from "../page1/page1";

@Component({
  selector: 'page-add-article',
  templateUrl: 'add-article.html'
})
export class AddArticlePage {

  categorias: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DBservice, public firebase: AngularFire) {
    this.categorias = this.db.getCategorias();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddArticlePage');
  }

  createNewAnuncio(form: any){
    this.db.addAnuncio(form.value.categoria, form.value.descripcion, form.value.lugar, form.value.precio, form.value.titulo).then(data => {
      if (data){
        this.navCtrl.setRoot(Page1);
      }
    });
  }

}
