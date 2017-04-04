import { Component } from '@angular/core';
import {NavController,} from 'ionic-angular';

import {DBservice} from '../../providers/providers';
import {Page2} from "../page2/page2";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController,private db: DBservice) {
  }

  login(form: any){
    this.db.login(form.value.email,form.value.password).then(data => {
      if (data){
        this.navCtrl.push(Page2);
      }
    });
  }
  logout(){
    this.db.deslogueo();
  }
}

