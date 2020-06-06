import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SponsorsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SponsorsProvider {
  BASE_URL='http://localhost:3000/sponsors' ; 

  constructor(public http: HttpClient) {
    console.log('Hello SponsorsProvider Provider');
  }
  getsponsors()
  { let token = localStorage.getItem('token'); 
   return this.http.get(this.BASE_URL+'/getspons',{headers:{
     'x-access-token':token 
   }});}

}
