import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriePage } from '../categorie/categorie';

/**
 * Generated class for the EshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eshop',
  templateUrl: 'eshop.html',
})
export class EshopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EshopPage');
  }
fermer(){
  this.navCtrl.push(CategoriePage);
}
}
