import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { InscriptionPage } from '../inscription/inscription';
import { MeetingPage } from '../meeting/meeting';
import { ConcoursPage } from '../concours/concours';

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

  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  inscription()
  {
      //this.navCtrl.push(MainPage) 
      this.navCtrl.push(InscriptionPage) ; 
    }

    Meeting()
  {
   
      this.navCtrl.push(MeetingPage) ; 
    }
  
    concours(){
      this.navCtrl.push(ConcoursPage);
    }
}
