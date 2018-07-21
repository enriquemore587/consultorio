import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileHomePage } from './profile-home';

@NgModule({
  declarations: [
    ProfileHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileHomePage),
  ],
})
export class ProfileHomePageModule {}
