import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NextMeeting } from '../../pages/home/models/nextMeeting';

/*
  Generated class for the HomeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeServiceProvider {
  public nextMeetingList : NextMeeting[] = [];

  constructor(public http: HttpClient) {
    this.nextMeetingList = [
      new NextMeeting(1,'Jose Enrique Vergara Ambriz', '2018-08-01', '13:00', 555, false, null, '5522400117'),
      new NextMeeting(2,'Uriel Morales Jimenez', '2018-08-02', '13:00', 555, true, null, '5522400117'),
      new NextMeeting(3,'Mariana Ceron Avelar', '2018-08-03', '13:00', 555, false, null, '5522400117'),
      new NextMeeting(5,'Benito Juarez', '2018-08-04', '13:00', 555, true, null, '5522400117'),
      new NextMeeting(6,'Andrez Manuel Lopez Obrador', '2018-08-05', '13:00', 555, false, null, '5522400117'),
      new NextMeeting(7,'Enrique Penia Nieto', '2018-08-06', '13:00', 555, false, null, '5522400117'),
      new NextMeeting(8,'Bruno Diaz', '2018-08-01', '13:00', 555, true, null, '5522400117'),
      new NextMeeting(9,'Jose Jose el Principe de la cancion', '2018-08-07', '13:00', 555, true, null, '5522400117'),
      new NextMeeting(10,'Ronaldo de Assis Moreira', '2018-08-08', '13:00', 555, true, null, '5522400117'),
      new NextMeeting(11,'Lionel Andrés Messi Cuccittini', '2018-08-09', '13:00', 555, false, null, '5522400117')
    ];
    console.log('Hello HomeServiceProvider Provider', this.nextMeetingList);
  }

}
