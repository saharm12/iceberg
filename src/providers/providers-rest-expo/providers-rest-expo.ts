import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProvidersRestExpoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersRestExpoProvider {

  BASE_URL='http://localhost:3000/exposant' ; 

  constructor(public http: HttpClient) {
    console.log('Hello ProvidersRestExpoProvider Provider');
  }

  Registerexpo(name, firstname, Email, telephone, raison, adresse, postale, ville, Pays, mobile, TVA, paiement, cheque){
    return this.http.post(this.BASE_URL+'/AddExpo',{
      'name':name,
      'firstname':firstname,
      'Email':Email,
      'telephone':telephone,
       'raison' :raison,
       'adresse' :adresse,
       'postale' :postale,
       'ville' :ville,
       'Pays' :Pays,
       'mobile' :mobile,
       'TVA' :TVA,
       'paiement' :paiement,
        'cheque' :cheque,
       





    });
  }

   checkemailNotTaken(email_exposant)
  {
    let token = localStorage.getItem('token'); 
    return this.http.post(this.BASE_URL+'/checkemailNotTaken',{
      'email_exposant': email_exposant,
     
    }); 
  }
  checktelNotTaken(telephone)
  {
    let token = localStorage.getItem('token'); 
    return this.http.post(this.BASE_URL+'/checktelNotTaken',{
      'telephone': telephone,
     
    }); 
  }

  checkmobileNotTaken(mobile)
  {
    let token = localStorage.getItem('token'); 
    return this.http.post(this.BASE_URL+'/checkmobileNotTaken',{
      'mobile': mobile,
     
    }); 
  }
}
