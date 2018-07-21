import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NextMeeting } from '../../pages/home/models/nextMeeting';
import { CallNumber } from '@ionic-native/call-number';

/*
  Generated class for the RegistryMeetingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegistryMeetingProvider {
  public nextMeetingToEdit : NextMeeting = new NextMeeting();

  constructor(
    public http: HttpClient,
    private callNumber: CallNumber
  ) {
    console.log('Hello RegistryMeetingProvider Provider');
  }
  public call() {
    this.callNumber.callNumber(this.nextMeetingToEdit.phoneNumber, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
}
