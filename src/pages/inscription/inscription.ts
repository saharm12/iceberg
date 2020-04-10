import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandidatPage } from '../candidat/candidat';
import { ExposantPage } from '../exposant/exposant';
import { ParticipantPage } from '../participant/participant';

/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
})
export class InscriptionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InscriptionPage');
  }


  Candidat(){
    this.navCtrl.push(CandidatPage);
  }

  exposant(){
    this.navCtrl.push(ExposantPage);
  }
  participant(){
    this.navCtrl.push(ParticipantPage);
  }

}
