import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HomeServiceProvider } from '../../providers/home-service/home-service';

import { AddPatientPage } from '../add-patient/add-patient';
import { ConfirmPatientPage } from '../confirm-patient/confirm-patient';
import { AddMeetingPage } from '../add-meeting/add-meeting';

import { CallNumber } from '@ionic-native/call-number';
import { RegistryMeetingPage } from '../registry-meeting/registry-meeting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeServiceProvider, CallNumber]
})
export class HomePage {
  public showAll = false;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public _HomeServiceProvider: HomeServiceProvider,
    private callNumber: CallNumber
  ) {

  }

  public changeShowing() {
    this.showAll = !this.showAll;
  }

  public addPatient() {
    const modal = this.modalCtrl.create(AddPatientPage);
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        const modalConfirmation = this.modalCtrl.create(ConfirmPatientPage);
        modalConfirmation.present();
      }
    });
  }

  public addMeeting() {
    this.navCtrl.push(AddMeetingPage);
    /*
    const modal = this.modalCtrl.create(AddMeetingPage);
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        const modalConfirmation = this.modalCtrl.create(ConfirmPatientPage);
        modalConfirmation.present();
      }
    });
    */
  }

  public call() {
    this.callNumber.callNumber("5575983238", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  public registerMeeting(index: number) {
    this.navCtrl.push(RegistryMeetingPage, { nextMeetingToEdit: this._HomeServiceProvider.nextMeetingList[index] });
  }

}
