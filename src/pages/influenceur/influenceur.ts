import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriePage } from '../categorie/categorie';

/**
 * Generated class for the InfluenceurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-influenceur',
  templateUrl: 'influenceur.html',
})
export class InfluenceurPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfluenceurPage');
  }
fermer(){
  this.navCtrl.push(CategoriePage);
}
}
