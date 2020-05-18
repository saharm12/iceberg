import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JurryPage}    from   '../../pages/jurry/jurry';
import {LaureatPage} from   '../../pages/laureat/laureat';
import { CategoriePage } from '../categorie/categorie';
import {PopoverController} from 'ionic-angular';
import {InfluenceurPage}from '../influenceur/influenceur';
import { ReglePage } from '../regle/regle';
import { MapPage } from '../map/map';
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
  viiew(){
    this.navCtrl.push(MapPage);
  }

  view(){
    this.navCtrl.push(JurryPage);
  }
  vieww(){
    this.navCtrl.push(CategoriePage);
  }
  afficher(){
    this.navCtrl.push(LaureatPage);
  }
  regle(event:any){
    let popover = this.popoverCtrl.create(ReglePage,{}, {cssClass: 'contact-popover'});
  popover.present({
    ev: event });}
}
