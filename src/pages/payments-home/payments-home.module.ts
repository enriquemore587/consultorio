import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentsHomePage } from './payments-home';

@NgModule({
  declarations: [
    PaymentsHomePage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentsHomePage),
  ],
})
export class PaymentsHomePageModule {}
