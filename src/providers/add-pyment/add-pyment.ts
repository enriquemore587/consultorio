import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NextMeeting } from '../../pages/home/models/nextMeeting';

/*
  Generated class for the AddPymentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddPymentProvider {
  public nextMeetingToEdit = new NextMeeting();
  public paymentQuantity : number = 0;
  constructor(public http: HttpClient) {
    console.log('Hello AddPymentProvider Provider');
  }

}
