import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PartenaireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PartenaireProvider {
  BASE_URL='http://localhost:3000/partenaire' ;

  constructor(public http: HttpClient) {
    console.log('Hello PartenaireProvider Provider');
  }
  getpartenaire()
   { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/getpartenaire',{headers:{
      'x-access-token':token 
    }});}

}
