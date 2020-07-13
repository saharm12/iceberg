import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JurryPage}    from   '../../pages/jurry/jurry';
import {LaureatPage} from   '../../pages/laureat/laureat';
import { CategoriePage } from '../categorie/categorie';
import {PopoverController} from 'ionic-angular';

import { ReglePage } from '../regle/regle';
import { ExposantPage } from '../exposant/exposant';
import { CandidatPage } from '../candidat/candidat';
import { MainPage } from '../main/main';
import { AproposPage } from '../apropos/apropos';

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
  
  
  main(){
    this.navCtrl.setRoot(MainPage );
  }
  apropos(){
    this.navCtrl.setRoot(AproposPage);
  
  }
  return(){
    this.navCtrl.setRoot(MainPage);
  }
  view(){
    this.navCtrl.setRoot(JurryPage);
  }
  vieww(){
    this.navCtrl.setRoot(CategoriePage);
  }
  exposant(){
    this.navCtrl.setRoot(ExposantPage);
  }
  candidat(){
    this.navCtrl.setRoot(CandidatPage);
  }
  
  regle(){
    this.navCtrl.setRoot(ReglePage)
  }

   
}
