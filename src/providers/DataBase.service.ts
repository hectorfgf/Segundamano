/**
 * Created by Hector on 30/03/2017.
 */
import { Injectable } from '@angular/core';
import {AngularFire} from 'angularfire2';


@Injectable()
export class DBservice {

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
        telefono: telefono
      }).then(()=>{resolve(true);});
    });
  }

  createNewUser2(name,email, password, telefono) {
    return new Promise(resolve => {
      this.firebase.auth.createUser({
        email: email,
        password: password
      }).then((sucess) => {
        console.log("cree la cuenta de:" + sucess.uid);
        this.firebase.database.object('/usuarios/' + sucess.uid).set({
          nombre: name,
          correo: email,
          telefono: telefono
        }).then(() => {
          console.log("AÑADI en la cuenta de:" + sucess.uid);
          alert("añadi usuario "+ sucess.uid);
          resolve(true);
        });
      });
    });
  }

  deslogueo(){
    this.firebase.auth.logout();
    localStorage.removeItem("useruid");
  }

}
