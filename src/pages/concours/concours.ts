import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JurryPage}    from   '../../pages/jurry/jurry';
import {LaureatPage} from   '../../pages/laureat/laureat';
import { CategoriePage } from '../categorie/categorie';
import {PopoverController} from 'ionic-angular';

import { ReglePage } from '../regle/regle';
import { ExposantPage } from '../exposant/exposant';
import { CandidatPage } from '../candidat/candidat';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConcoursPage');
  }
  
  

  view(){
    this.navCtrl.push(JurryPage);
  }
  vieww(){
    this.navCtrl.push(CategoriePage);
  }
  exposant(){
    this.navCtrl.push(ExposantPage);
  }
  candidat(){
    this.navCtrl.push(CandidatPage);
  }
  
  regle(event:any){
    let popover = this.popoverCtrl.create(ReglePage,{}, {cssClass: 'contact-popover'});
  popover.present({
    ev: event });}
}
