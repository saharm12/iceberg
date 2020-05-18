import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConcoursPage } from '../concours/concours';

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
fermer(){
  this.navCtrl.push(ConcoursPage);
}
}
