import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConcoursPage } from '../concours/concours';
import { InscriptionPage } from '../inscription/inscription';
import { MainPage } from '../main/main';
import { AproposPage } from '../apropos/apropos';

/**
 * Generated class for the ReglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regle',
  templateUrl: 'regle.html',
})
export class ReglePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReglePage');
  }
  main(){
    this.navCtrl.setRoot(MainPage);
  }
  apropos(){
    this.navCtrl.setRoot(AproposPage);
  
  }
  return(){
    this.navCtrl.setRoot(ConcoursPage);
  }
fermer(){
  this.navCtrl.setRoot(ConcoursPage);
}
//inscrire(){
  //this.navCtrl.push(InscriptionPage);
//}
}
