import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PartProvider {
  BASE_URL='http://localhost:3000/participant' ; 
   

  constructor(public http: HttpClient) {
    console.log('Hello PartProvider Provider');
  }
  Register(nom, prenom, email, adresse, code_postale, raison_sociale, TVA, Ville, reserver, programme, type_participant,paiement, num_cheque){
    return this.http.post(this.BASE_URL+'/Register',{
      "nom" :nom,
      "prenom" : prenom,
      "email" : email,
      "adresse" : adresse,
      "code_postale": code_postale,
      "raison_sociale": raison_sociale,
      "TVA": TVA,
      "Ville": Ville,
      "reserver": reserver,
      "programme": programme,
     "type_participant": type_participant,
      "paiement": paiement,
      "num_cheque": num_cheque,
    });
  }

  checkemailNotTaken(email_participant)
  {
    let token = localStorage.getItem('token'); 
    return this.http.post(this.BASE_URL+'/checkemailNotTaken',{
      'email_participant': email_participant,
     
    }); 
  }
}
