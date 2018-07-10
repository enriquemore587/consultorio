import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CallNumber } from '@ionic-native/call-number';
/*
  Generated class for the AddMeetingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddMeetingProvider {
  public dayList: string[] = [];
  public monthList: any[] = [];
  public yearList: number[] = [];
  public tipoCitaList: string[] = ["Única", 'Presupuesto'];
  public categoriaList: string[] = [
    'Otra',
    'Periodoncia',
    'Endodoncia',
    'Prostodoncia Fija',
    'Prostodoncia Removible',
    'Restauradora',
    'Preventiva',
    'Limpieza',
    'Radiología',
    'Estética',
    'Exodoncia',
    'Ortodoncia',
    'Implantodología',
    'Cirujia',
    'Farmacología'
  ];


  constructor(
    public http: HttpClient,
    private callNumber: CallNumber
  ) {
    this.getDays();
    this.getMonth();
    this.getYears();
    console.log('Hello AddMeetingProvider Provider');
  }


  public call(phoneNumber: string) {
    this.callNumber.callNumber(phoneNumber, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  private getDays() {
    for (let index = 0; index < 31; index++) {
      let day = (index + 1) < 11 ? `0${(index + 1)}` : `${(index + 1)}`;
      this.dayList = [...this.dayList, day]
    }
  }
  private getMonth() {
    this.monthList.push({ value: '01', description: 'Enero' });
    this.monthList.push({ value: '02', description: 'Febrero' });
    this.monthList.push({ value: '03', description: 'Marzo' });
    this.monthList.push({ value: '04', description: 'Abril' });
    this.monthList.push({ value: '05', description: 'Mayo' });
    this.monthList.push({ value: '06', description: 'Junio' });
    this.monthList.push({ value: '07', description: 'Julio' });
    this.monthList.push({ value: '08', description: 'Augosto' });
    this.monthList.push({ value: '09', description: 'Septiembre' });
    this.monthList.push({ value: '10', description: 'Octubre' });
    this.monthList.push({ value: '11', description: 'Noviembre' });
    this.monthList.push({ value: '12', description: 'Diciembre' });
  }

  private getYears() {
    for (let index = 2018; index < 2025; index++) {
      this.yearList = [...this.yearList, index]
    }
  }


}
