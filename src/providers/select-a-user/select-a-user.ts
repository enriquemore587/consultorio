import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SelectAUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SelectAUserProvider {
  public userToSelectList : any[] = [];

  constructor(public http: HttpClient) {
    this.getUserToSelectFromEndPoint();
    console.log('Hello SelectAUserProvider Provider');
  }

  getUserToSelectFromEndPoint(){
    this.userToSelectList = [...this.userToSelectList, {id: 1, name: 'Jose Enrique Vergara', foto : ''}];
    this.userToSelectList = [...this.userToSelectList, {id: 2, name: 'Luz Maria Ambriz', foto : ''}];
    this.userToSelectList = [...this.userToSelectList, {id: 3, name: 'Bruno Diaz', foto : ''}];
    this.userToSelectList = [...this.userToSelectList, {id: 4, name: 'Clark Ken', foto : ''}];
    this.userToSelectList = [...this.userToSelectList, {id: 5, name: 'Petter Parker', foto : ''}];
  }

}
