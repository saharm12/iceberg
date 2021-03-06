import { Component ,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController } from 'ionic-angular';
import { SpeakerProvider} from '../../providers/speaker/speaker';
import { DocumentProvider} from '../../providers/document/document';
import { ParticipantPage } from '../participant/participant';
import {ReserverpassPage} from '../reserverpass/reserverpass';
import { ProgrammeProvider} from'../../providers/programme/programme'
import {PartProvider } from '../../providers/part/part';
import { MainPage } from '../main/main';
import { AproposPage } from '../apropos/apropos';
/**
 * Generated class for the MeetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meeting',
  templateUrl: 'meeting.html',

})
export class MeetingPage {
  speake= []; 
  programmes=[];  
documents=[];
createSuccess = false;

  base_url="http://localhost:3000"

  constructor(public nav: NavController,private alertCtrl: AlertController,private Part : PartProvider ,private prog : ProgrammeProvider, private docProv:DocumentProvider,private speakProv: SpeakerProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingPage');
  }
  ngOnInit() {
    this.getSpeak();
    this.getProgramme();
  
  }

  getSpeak()
  { 
    {   
      this.speakProv.getSpeaker().subscribe(data=>{
        let result:any = data; 
        console.log(result.speakers); 
        this.speake = result.speakers; 
      })
  }
} 
participant(){
  
  this.Part.getcountpart().subscribe((res:any)=>{
   
      console.log("res", res);
     // let result:any = res; 
      console.log("res", res.participant);
      if(res.participant  == 100){
          
        this.showPopup("Erreur", "inscription a été expiré.");
  
      }
      else{
        this.navCtrl.push(ReserverpassPage);
      }
       
    })
  
}
getDocument(){
  {   
    this.docProv.getDocument().subscribe(data=>{
    

      let result:any = data; 
      console.log(result.laureats); 
     

      this.documents = result.document; 
      

    })
 }


 }

 getProgramme(){
  {   
    this.prog.getprogamme().subscribe(data=>{
    

      let result:any = data; 
      console.log(result.programmes); 
     

      this.programmes = result.programme; 
      

    })
 }


 }


showPopup(title, text) {
  let alert = this.alertCtrl.create({
    title: title,
    subTitle: text,
    buttons: [
      {
        text: 'OK',
        handler: data => {
          if (this.createSuccess) {
            this.nav.popToRoot();
          }
        }
      }
    ]
  });
  alert.present();
}
main(){
  this.navCtrl.push(MainPage);
}
apropos(){
  this.navCtrl.push(AproposPage);

}
return(){
  this.navCtrl.push(MainPage);
}
}

