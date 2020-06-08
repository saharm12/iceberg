import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController, AlertController } from 'ionic-angular';
import { InscriptionPage } from '../inscription/inscription';
import { MeetingPage } from '../meeting/meeting';
import { ConcoursPage } from '../concours/concours';
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main', 
  templateUrl: 'main.html', 
  
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  inscription()
  {
      //this.navCtrl.push(MainPage) 
      this.navCtrl.setRoot(InscriptionPage) ; 
    }

    Meeting()
  {
   
      this.navCtrl.setRoot(MeetingPage) ; 
    }
  
    concours(){
      this.navCtrl.setRoot(ConcoursPage);
    }

    Chat(){
      let alert = this.alertCtrl.create({
        'title':'Saisir votre nom', 
        inputs:[{
          'name':'NickName', 
          'value':''
        }],
        buttons:[{
          text:'Joindre Chat', 
          handler:data=>{
            this.navCtrl.push(ChatPage,{name:data.NickName})
            console.log(data); 
          },
          
        }, 
        {
          text:'Annuler', 
          handler:data=>{
            //this.navCtrl.push(ChatPage,{name:data.NickName})
            console.log(data); 
          },
          
        }]

      })
      alert.present(); 
      //this.navCtrl.push(ChatPage);
    }
 
}
