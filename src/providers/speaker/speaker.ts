import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SpeakerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpeakerProvider {
  BASE_URL='http://localhost:3000/speaker' ; 

  constructor(public http: HttpClient) {
    console.log('Hello SpeakerProvider Provider');
  }
  getSpeaker()
  { let token = localStorage.getItem('token'); 
    return this.http.get(this.BASE_URL+'/Getsp',{headers:{
      'x-access-token':token 
    }}); 
  }
}
