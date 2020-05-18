import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriePage } from '../categorie/categorie';

/**
 * Generated class for the BjuryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bjury',
  templateUrl: 'bjury.html',
})
export class BjuryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BjuryPage');
  }
  fermer(){
    this.navCtrl.push(CategoriePage);
  }
}
