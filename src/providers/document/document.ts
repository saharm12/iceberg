import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DocumentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DocumentProvider {
  BASE_URL='http://localhost:3000/document' ; 

  constructor(public http: HttpClient) {
    console.log('Hello DocumentProvider Provider');
  }
  getDocument( )
  { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/getdoc',{headers: {   
     'x-access-token':token 
    }}); 
  }
}
