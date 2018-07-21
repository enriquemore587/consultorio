import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientsHomePage } from './patients-home';

@NgModule({
  declarations: [
    PatientsHomePage,
  ],
  imports: [
    IonicPageModule.forChild(PatientsHomePage),
  ],
})
export class PatientsHomePageModule {}
