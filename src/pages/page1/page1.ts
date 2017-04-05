import { Component } from '@angular/core';
import {NavController,} from 'ionic-angular';

import {DBservice} from '../../providers/providers';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController,private db: DBservice) {
  }

}

