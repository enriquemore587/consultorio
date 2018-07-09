import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectAUserPage } from './select-a-user';

@NgModule({
  declarations: [
    SelectAUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectAUserPage),
  ],
})
export class SelectAUserPageModule {}
