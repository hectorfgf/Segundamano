import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {DBservice} from "../../providers/DataBase.service";
import {Page1} from "../page1/page1";

/*
  Generated class for the AddArticle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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

    addAnuncio(form: any){

      const items = this.db.getArticles();
      items.push({ categoria: form.value.categoria,
                   descripcion: form.value.descripcion,
                   lugar: form.value.lugar,
                   precio: form.value.precio,
                   titulo:form.value.titulo});

      console.log("categoria: " + form.value.categoria);
      console.log("descripcion: " + form.value.descripcion);
      console.log("lugar: " + form.value.lugar);
      console.log("precio: " + form.value.precio);
      console.log("titulo: " + form.value.titulo);

        /*.then( (data) =>
      { let uid = localStorage.getItem('useruid')
        this.firebase.database.list('/usuarios/' + uid + "/mis-articulos").push(data.uid);
        this.firebase.database.list('/categoria/' + form.value.categoria).push(data.uid);

      });*/
    }

    createNewAnuncio(form: any){

      this.db.addAnuncio(form.value.categoria, form.value.descripcion, form.value.lugar, form.value.precio, form.value.titulo).then(data => {
        if (data){
          this.navCtrl.setRoot(Page1);
        }
      });
    }

    prueba(form: any){

    console.log("categoria: " + form.value.categoria);
    console.log("descripcion: " + form.value.descripcion);
    console.log("lugar: " + form.value.lugar);
    console.log("precio: " + form.value.precio);
    console.log("titulo: " + form.value.titulo);
    }

}

