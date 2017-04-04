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

  deslogueo(){
    this.firebase.auth.logout();
    localStorage.removeItem("useruid");
  }

}
