import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddPymentProvider } from '../../providers/add-pyment/add-pyment';

/**
 * Generated class for the AddPyamentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-pyament',
  templateUrl: 'add-pyament.html',
  providers: [AddPymentProvider]
})
export class AddPyamentPage {
  public paymentComplete: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, public _AddPymentProvider: AddPymentProvider) {
    this._AddPymentProvider.nextMeetingToEdit = navParams.get('nextMeetingToEdit');
    this._AddPymentProvider.paymentQuantity = this._AddPymentProvider.nextMeetingToEdit.amount;
    console.log(this._AddPymentProvider.nextMeetingToEdit);
    console.log(this._AddPymentProvider.paymentQuantity);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPyamentPage');
  }

}
