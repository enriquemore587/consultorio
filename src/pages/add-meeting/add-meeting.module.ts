import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMeetingPage } from './add-meeting';

@NgModule({
  declarations: [
    AddMeetingPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMeetingPage),
  ],
})
export class AddMeetingPageModule {}
