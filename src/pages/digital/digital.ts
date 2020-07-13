import { Component } from '@angular/core';
import { IonicPage, ViewController,NavController, NavParams } from 'ionic-angular';
import { CategoriePage } from '../categorie/categorie';
/**
 * Generated class for the DigitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-digital',
  templateUrl: 'digital.html',
})
export class DigitalPage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DigitalPage');
  }
  fermer(){
    this.viewCtrl.dismiss();
  }
}
