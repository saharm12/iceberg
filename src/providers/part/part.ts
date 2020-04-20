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
  Register(nom, prenom, email, adresse, code_postale, raison_sociale, TVA, Ville, reserver, programme, paiement, num_cheque){
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
      "paiement": paiement,
      "num_cheque": num_cheque,
    });
  }
}
