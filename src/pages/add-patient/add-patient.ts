import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { AddPyamentPage } from '../add-pyament/add-pyament';
import { AddPatientProvider } from '../../providers/add-patient/add-patient';
import { PatientToAdd } from './models/patient';

/**
 * Generated class for the AddPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-patient',
  templateUrl: 'add-patient.html',
  providers: [AddPatientProvider]
})
export class AddPatientPage {
  public title: string = 'Agregando paciente';
  public btnTitle : string = 'Agregar paciente';
  public btnAddressTitle : string = 'Agregar direccion';
  
  public patient: PatientToAdd;
  month; year; day; gender;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewController: ViewController,
    public _AddPatientProvider: AddPatientProvider
  ) {
    this.patient = new PatientToAdd(0, '', '', '', '', '', '', '', 'Ho hay observaciones');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPatientPage');
  }

  showPyment() {
    this.navCtrl.push(AddPyamentPage);
    /*
    const modal = this.modalCtrl.create(AddPyamentPage);
    modal.present();*/
  }

  public submit(){
    this.viewController.dismiss(this.patient);
  }

  public dismiss() {
    this.viewController.dismiss();
  }

}
