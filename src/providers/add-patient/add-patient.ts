import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AddPatientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddPatientProvider {
  public dayList :string [] = [];
  public monthList : any[] = [];
  public yearList : number[] = [];

  constructor(public http: HttpClient) {
    this.getDays();
    this.getMonth();
    this.getYears();
    console.log('Hello AddPatientProvider Provider');
  }

  private getDays(){
    for (let index = 0; index < 31; index++) {
      let day = (index + 1)<11 ? `0${(index + 1)}` : `${(index + 1)}`;
      this.dayList = [...this.dayList, day]
    }
  }
  private getMonth(){
    this.monthList.push({value: '01', description: 'Enero'});
    this.monthList.push({value: '02', description: 'Febrero'});
    this.monthList.push({value: '03', description: 'Marzo'});
    this.monthList.push({value: '04', description: 'Abril'});
    this.monthList.push({value: '05', description: 'Mayo'});
    this.monthList.push({value: '06', description: 'Junio'});
    this.monthList.push({value: '07', description: 'Julio'});
    this.monthList.push({value: '08', description: 'Augosto'});
    this.monthList.push({value: '09', description: 'Septiembre'});
    this.monthList.push({value: '10', description: 'Octubre'});
    this.monthList.push({value: '11', description: 'Noviembre'});
    this.monthList.push({value: '12', description: 'Diciembre'});
  }

  private getYears(){
    for (let index = 2018; index > 1940; index--) {
      this.yearList = [...this.yearList, index]
    }
  }

}
