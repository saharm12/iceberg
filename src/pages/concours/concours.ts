import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JurryPage}    from   '../../pages/jurry/jurry';
import {LaureatPage} from   '../../pages/laureat/laureat';
/**
 * Generated class for the ConcoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-concours',
  templateUrl: 'concours.html',
})
export class ConcoursPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConcoursPage');
  }
  view(){
    this.navCtrl.push(JurryPage);
  }
  afficher(){
    this.navCtrl.push(LaureatPage);
  }

}
