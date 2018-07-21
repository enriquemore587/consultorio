import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFastPaymentPage } from './add-fast-payment';

@NgModule({
  declarations: [
    AddFastPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFastPaymentPage),
  ],
})
export class AddFastPaymentPageModule {}
