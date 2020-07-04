import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpeakerProvider} from '../../providers/speaker/speaker';
import { DocumentProvider} from '../../providers/document/document';
import { ParticipantPage } from '../participant/participant';
import {ReserverpassPage} from '../reserverpass/reserverpass';
import { ProgrammeProvider} from'../../providers/programme/programme'
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
  base_url="http://localhost:3000"

  constructor(private prog : ProgrammeProvider, private docProv:DocumentProvider,private speakProv: SpeakerProvider,public navCtrl: NavController, public navParams: NavParams) {
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
  this.navCtrl.push(ReserverpassPage);
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

}
