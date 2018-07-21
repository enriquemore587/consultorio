import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the MeetingsHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meetings-home',
  templateUrl: 'meetings-home.html',
})
export class MeetingsHomePage {
  
  public type: string = "IMPORTANTES";
  public isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingsHomePage');
  }

}
