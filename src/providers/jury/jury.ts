import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the JuryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JuryProvider {
  BASE_URL='http://localhost:3000/jurie' ; 

  constructor(public http: HttpClient) {
    console.log('Hello JuryProvider Provider');
  }
  getjury()
  { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/GetJuries',{headers:{
      'x-access-token':token 
    }}); 
  }
 
}
