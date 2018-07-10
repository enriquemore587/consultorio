import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SelectAUserPage } from '../select-a-user/select-a-user';
import { PatientToAdd } from '../add-patient/models/patient';
import { UserToSelect } from '../select-a-user/models/userToSelect';
import { AddMeetingProvider } from '../../providers/add-meeting/add-meeting';


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
  providers: [AddMeetingProvider]
})
export class AddMeetingPage {
  public userToSelect : UserToSelect;

  public patient : PatientToAdd;
  month; year; day;
  public btnTitle : string = 'Agregar cita';
  public event = {
    timeStarts: '07:43',
    timeEnd: '07:43'
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public _AddMeetingProvider : AddMeetingProvider
  ) {
    this.patient = new PatientToAdd(0, '', '', '', '', '', '', '', 'Ho hay observaciones');
    this.userToSelect = new UserToSelect();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMeetingPage');
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

  public call(){
    this._AddMeetingProvider.call(this.userToSelect.phoneNumber);
  }

}
