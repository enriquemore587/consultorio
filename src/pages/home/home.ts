import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HomeServiceProvider } from '../../providers/home-service/home-service';

import { AddPatientPage } from '../add-patient/add-patient';
import { ConfirmPatientPage } from '../confirm-patient/confirm-patient';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeServiceProvider]
})
export class HomePage {
  public showAll = false;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public _HomeServiceProvider: HomeServiceProvider
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

}
