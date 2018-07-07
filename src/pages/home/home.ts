import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public myList = [1,1,1,1,1,1,1,1];
  constructor(public navCtrl: NavController) {

  }

}
