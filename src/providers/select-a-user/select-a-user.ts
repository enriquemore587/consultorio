import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserToSelect } from '../../pages/select-a-user/models/userToSelect';

/*
  Generated class for the SelectAUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SelectAUserProvider {
  public userToSelectList : UserToSelect[] = [];

  constructor(public http: HttpClient) {
    this.getUserToSelectFromEndPoint();
    console.log('Hello SelectAUserProvider Provider');
  }

  getUserToSelectFromEndPoint(){
    this.userToSelectList = [...this.userToSelectList, {id: 1, name: 'Jose Enrique Vergara', phoneNumber : '5522400117', notaImportante: 'PACIENTE NO DIABETICO'}];
    this.userToSelectList = [...this.userToSelectList, {id: 2, name: 'Mariana Ceron Avelar', phoneNumber : '5565578956', notaImportante: 'PACIENTE DIABETICO'}];
    this.userToSelectList = [...this.userToSelectList, {id: 3, name: 'Luz Maria A. M.', phoneNumber : '5574129158', notaImportante: 'PACIENTE SANO'}];
    this.userToSelectList = [...this.userToSelectList, {id: 4, name: 'Scarlett Johansson', phoneNumber : '5575983238', notaImportante: 'PACIENTE DIABETICO'}];
    this.userToSelectList = [...this.userToSelectList, {id: 5, name: 'Petter Parker', phoneNumber : '57916086', notaImportante: 'PACIENTE NO DIABETICO'}];
  }

}
