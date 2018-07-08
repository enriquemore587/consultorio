import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeServiceProvider } from '../../providers/home-service/home-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeServiceProvider]
})
export class HomePage {
  public myList = [1,1,1,1,1,1,1,1];
  constructor(
    public navCtrl: NavController
    , public _HomeServiceProvider : HomeServiceProvider
  ) {
    
  }

}
