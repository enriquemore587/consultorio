import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmPatientPage } from './confirm-patient';

@NgModule({
  declarations: [
    ConfirmPatientPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmPatientPage),
  ],
})
export class ConfirmPatientPageModule {}
