import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SelectAUserPage } from '../select-a-user/select-a-user';
import { PatientToAdd } from '../add-patient/models/patient';

/**
 * Generated class for the AddMeetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-meeting',
  templateUrl: 'add-meeting.html',
})
export class AddMeetingPage {
  public id : any = null;

  public patient : PatientToAdd;
  month; year; day; gender;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    this.patient = new PatientToAdd(0, '', '', '', '', '', '', '', 'Ho hay observaciones');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMeetingPage');
  }

  public SelectPatient(){
    const modal = this.modalCtrl.create(SelectAUserPage);
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        console.log('data', data);
        this.id = data;
      }
    });
  }

}
