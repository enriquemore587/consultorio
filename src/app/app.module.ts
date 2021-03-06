import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AddPatientPage } from '../pages/add-patient/add-patient';
import { AddPyamentPage } from '../pages/add-pyament/add-pyament';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomeServiceProvider } from '../providers/home-service/home-service';
import { AddPatientProvider } from '../providers/add-patient/add-patient';
import { ConfirmPatientPage } from '../pages/confirm-patient/confirm-patient';
import { AddMeetingPage } from '../pages/add-meeting/add-meeting';
import { SelectAUserPage } from '../pages/select-a-user/select-a-user';
import { SelectAUserProvider } from '../providers/select-a-user/select-a-user';

import { CallNumber } from '@ionic-native/call-number';
import { AddMeetingProvider } from '../providers/add-meeting/add-meeting';
import { RegistryMeetingPage } from '../pages/registry-meeting/registry-meeting';
import { RegistryMeetingProvider } from '../providers/registry-meeting/registry-meeting';
import { AddPymentProvider } from '../providers/add-pyment/add-pyment';
import { PaymentsHomePage } from '../pages/payments-home/payments-home';
import { PatientsHomePage } from '../pages/patients-home/patients-home';
import { MeetingsHomePage } from '../pages/meetings-home/meetings-home';
import { ProfileHomePage } from '../pages/profile-home/profile-home';
import { AddFastPaymentPage } from '../pages/add-fast-payment/add-fast-payment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    AddPatientPage,
    ConfirmPatientPage,
    AddMeetingPage,
    SelectAUserPage,
    RegistryMeetingPage,
    AddPyamentPage,
    PaymentsHomePage,
    PatientsHomePage,
    MeetingsHomePage,
    ProfileHomePage,
    AddFastPaymentPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    AddPatientPage,
    AddPyamentPage,
    ConfirmPatientPage,
    AddMeetingPage,
    SelectAUserPage,
    RegistryMeetingPage,
    PaymentsHomePage,
    PatientsHomePage,
    MeetingsHomePage,
    ProfileHomePage,
    AddFastPaymentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomeServiceProvider,
    AddPatientProvider,
    SelectAUserProvider,
    CallNumber,
    AddMeetingProvider,
    RegistryMeetingProvider,
    AddPymentProvider
  ]
})
export class AppModule {}
