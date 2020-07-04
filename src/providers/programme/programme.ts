import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProgrammeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProgrammeProvider {
  BASE_URL='http://localhost:3000/programme' ; 


  constructor(public http: HttpClient) {
    console.log('Hello ProgrammeProvider Provider');
  }
  getprogamme()
  { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/getprog',{headers:{
      'x-access-token':token 
    }}); 
  }
 
}
