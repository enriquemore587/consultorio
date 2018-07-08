import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ConfirmPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-patient',
  templateUrl: 'confirm-patient.html',
})
export class ConfirmPatientPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPatientPage');
  }
  public dismiss() {
    this.viewController.dismiss();
  }

}
