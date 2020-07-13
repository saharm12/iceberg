import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CandidatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CandidatProvider {
  BASE_URL='http://localhost:3000/candidat' ; 


  constructor(public http: HttpClient) {
    console.log('Hello CandidatProvider Provider');
  }

PostCandit( fileURL )
  { 
    
    let token = localStorage.getItem('token'); 
    return this.http.post(this.BASE_URL+'/ajouter',{
     ' fileURL ': fileURL ,
    

     

    }); 
  }
  checkemailNotTaken(email)
  {
    let token = localStorage.getItem('token'); 
    return this.http.post(this.BASE_URL+'/checkemailNotTaken',{
      'email': email,
     
    }); 
  }
  checkGSMNotTaken(GSM)
  {
    let token = localStorage.getItem('token'); 
    return this.http.post(this.BASE_URL+'/CheckGSMNotTaken',{
      'GSM': GSM,
     
    }); 
  }
}
