import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistryMeetingProvider } from '../../providers/registry-meeting/registry-meeting';
import { AddPyamentPage } from '../add-pyament/add-pyament';

/**
 * Generated class for the RegistryMeetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registry-meeting',
  templateUrl: 'registry-meeting.html',
  providers: [RegistryMeetingProvider]
})
export class RegistryMeetingPage {
  public paymentType: String = 'SIN PAGO';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public _RegistryMeetingProvider: RegistryMeetingProvider) {
    this._RegistryMeetingProvider.nextMeetingToEdit = navParams.get('nextMeetingToEdit');
    console.log(this._RegistryMeetingProvider.nextMeetingToEdit);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistryMeetingPage');
  }

  public registCPago() {
    this.navCtrl.push(AddPyamentPage, {nextMeetingToEdit: this._RegistryMeetingProvider.nextMeetingToEdit});
  }

  public registSPago() {

  }


  public call() {
    this._RegistryMeetingProvider.call();
  }

}
