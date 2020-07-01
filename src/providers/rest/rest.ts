import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
   
  BASE_URL='http://localhost:3000/users' ; 
 
  
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

 
  loginUser(email,mdp) 
  {
    return this.http.post(this.BASE_URL+'/login',{
      'email':email, 
      'mdp':mdp
    }) ; 
  }
  
  getUserInfo()
  { let id = localStorage.getItem('id'); 
    let token = localStorage.getItem('token'); 
   return  this.http.get(this.BASE_URL+'/'+id,{headers:{'x-access-token':token}}) // appel de la requete de recupration des donnes utilisateurs 
  }
  isAdmin:boolean=false;
  registerUser( name,firstname, email,password,isAdmin){
    return this.http.post(this.BASE_URL+'/register',{
      'name':name,
      'firstname':firstname,
      'email':email,
      'password':password,
      'isAdmin':isAdmin



    });
  }

  checkemailNotTaken(email)
  {
    let token = localStorage.getItem('token'); 
    return this.http.post(this.BASE_URL+'/checkEmailNotTaken',{
      'email': email,
     
    }); 
  }




}
