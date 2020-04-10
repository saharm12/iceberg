import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReserverpassPage } from '../reserverpass/reserverpass';

/**
 * Generated class for the ParticipantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-participant',
  templateUrl: 'participant.html',
})
export class ParticipantPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantPage');
  }
  reserver(){
    this.navCtrl.push(ReserverpassPage);
  }
}