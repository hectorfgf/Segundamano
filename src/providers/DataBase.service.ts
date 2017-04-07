/**
 * Created by Hector on 30/03/2017.
 */
import { Injectable } from '@angular/core';
import {AngularFire} from 'angularfire2';


@Injectable()
export class DBservice {

  imagendefecto = "data:image/jpeg;base64,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";

  constructor(private firebase: AngularFire) {
  }
  login(email, passwd) {
    return new Promise(resolve =>
    {
      this.firebase.auth.login({
      email: email,
      password: passwd
      }).then(
        (success) => {
          localStorage.setItem("useruid", success.uid);
          resolve(true);
        }
      ).catch(
        (error) => {
          resolve(false);
        }
      )
    });
  }
  createNewUser(email,password){
    return new Promise(resolve=>{
      this.firebase.auth.createUser({
        email: email,
        password: password
      }).then((echo) => {resolve(echo.uid)});
    });
  }
  addUserData(uid, name, email, telefono){
    return new Promise(resolve=>{
      this.firebase.database.object('/usuarios/' + uid).set({
        nombre: name,
        correo: email,
        telefono: telefono,
        imagen: this.imagendefecto
      }).then(()=>{resolve(true);});
    });
  }

  getProfile(uid){
    return this.firebase.database.list('/usuarios/'+uid);
  }
  getArticles(){
    return this.firebase.database.list('/articulos');
  }

  deslogueo(){
    this.firebase.auth.logout();
    localStorage.removeItem("useruid");
  }
  changeName(nombre2, uid){
    this.firebase.database.object("/usuarios/"+uid).update({nombre: nombre2});
  }
  changePhone(numero, uid){
    this.firebase.database.object("/usuarios/"+uid).update({telefono: numero});
  }
  addAnuncio (categoria, descripcion, lugar, precio, titulo,imagen,uid){
    return new Promise ( resolve => {
      let aux = this.firebase.database.list('/articulos').push({
        categoria: categoria,
        descripcion: descripcion,
        lugar: lugar,
        precio: precio,
        titulo: titulo,
        imagen: imagen,
        propietario: uid
      });
      this.firebase.database.list('/usuarios/' + uid + "/mis-articulos").push(aux.key);
      this.firebase.database.list('/categoria/' + categoria + "/").push(aux.key);
      resolve(true);
    });
  }
  getCategorias(){
    return this.firebase.database.list('/categoria');
  }
  changePhoto(photo, uid){
    this.firebase.database.object("/usuarios/"+uid).update({imagen: photo});
  }
  getArticlesUser(uid){
    return this.firebase.database.list('/usuarios/'+uid+'/mis-articulos',{ preserveSnapshot: true});
  }
  getFavUser(uid){
    return this.firebase.database.list('/usuarios/'+uid+'/mis-favoritos',{ preserveSnapshot: true});
  }
  getArticle(uid){
    return this.firebase.database.list('/articulos/'+uid,{ preserveSnapshot: true});
  }
  getArticles2(){
    return this.firebase.database.list('/articulos',{ preserveSnapshot: true});
  }
  getContact(){
    return this.firebase.database.list('/usuarios');
  }
  addFav(anuncio, uid){
    return new Promise ( resolve => {
      this.firebase.database.list('/usuarios/' + uid + "/mis-favoritos").push(anuncio).then(() =>{
        resolve(true);
      });
    });
  }
  removeFav(anuncio, uid){
    this.firebase.database.list('/usuarios/' + uid + "/mis-favoritos").remove(anuncio);
  }
  removeMyArticle(anuncio, uid){
    this.firebase.database.list('/usuarios/' + uid + "/mis-articulos").remove(anuncio);
  }
  removeArticle(anuncio){
    this.firebase.database.list('/articulos').remove(anuncio);
  }
}
