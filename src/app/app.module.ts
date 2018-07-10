import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
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
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    AddPatientPage,
    AddPyamentPage,
    ConfirmPatientPage,
    AddMeetingPage,
    SelectAUserPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    AddPatientPage,
    AddPyamentPage,
    ConfirmPatientPage,
    AddMeetingPage,
    SelectAUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomeServiceProvider,
    AddPatientProvider,
    SelectAUserProvider,
    CallNumber,
    AddMeetingProvider
  ]
})
export class AppModule {}
