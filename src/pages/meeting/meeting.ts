import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpeakerProvider} from '../../providers/speaker/speaker';

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

  base_url="http://localhost:3000"

  constructor(private speakProv: SpeakerProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingPage');
  }
  ngOnInit() {
    this.getSpeak();
   
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


}
