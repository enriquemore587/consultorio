import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistryMeetingPage } from './registry-meeting';

@NgModule({
  declarations: [
    RegistryMeetingPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistryMeetingPage),
  ],
})
export class RegistryMeetingPageModule {}
