import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LaureatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LaureatProvider {
  BASE_URL='http://localhost:3000/laureats' ; 

  constructor(public http: HttpClient) {
    console.log('Hello LaureatProvider Provider');
  }
  getLaureat( )
  { console.log('Hello LaureatProvider ');
    let token = localStorage.getItem('token');
    console.log('token cc',token);
    return this.http.get(this.BASE_URL+'/GetLaureat',{headers: {   
     'x-access-token':token 
    }}); 
  }

}
