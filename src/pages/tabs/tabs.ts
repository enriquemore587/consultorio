import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PaymentsHomePage } from '../payments-home/payments-home';
import { MeetingsHomePage } from '../meetings-home/meetings-home';
import { PatientsHomePage } from '../patients-home/patients-home';
import { ProfileHomePage } from '../profile-home/profile-home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public tab1Root = HomePage;
  public tab2Root = MeetingsHomePage;
  public tab3Root = PatientsHomePage;
  public tab4Root = PaymentsHomePage;
  public tab5Root = ProfileHomePage;

  constructor() {
  }
}
