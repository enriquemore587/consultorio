import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingsHomePage } from './meetings-home';

@NgModule({
  declarations: [
    MeetingsHomePage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingsHomePage),
  ],
})
export class MeetingsHomePageModule {}
