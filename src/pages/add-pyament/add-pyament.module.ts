import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPyamentPage } from './add-pyament';

@NgModule({
  declarations: [
    AddPyamentPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPyamentPage),
  ],
})
export class AddPyamentPageModule {}
