import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UserToSelect } from '../select-a-user/models/userToSelect';
import { SelectAUserPage } from '../select-a-user/select-a-user';

/**
 * Generated class for the AddFastPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-fast-payment',
  templateUrl: 'add-fast-payment.html',
})
export class AddFastPaymentPage {
  public userToSelect : UserToSelect;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl : ModalController) {
    this.userToSelect = new UserToSelect();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFastPaymentPage');
  }

  public SelectPatient(){
    const modal = this.modalCtrl.create(SelectAUserPage);
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        this.userToSelect = data;
        console.log('this.userToSelect', this.userToSelect);
      }
    });
  }
}
