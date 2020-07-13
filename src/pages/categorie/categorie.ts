import { Component } from '@angular/core';
import { ModalController,ViewController,IonicPage, NavController, NavParams, AlertController ,PopoverController} from 'ionic-angular';
import { WebsitePage } from '../website/website';
import { EshopPage } from '../eshop/eshop';
import { DigitalPage } from '../digital/digital';
import { StartupPage } from '../startup/startup';
import { SeoPage } from '../seo/seo';
import { InfluenceurPage } from '../influenceur/influenceur';
import {MobilePage} from '../mobile/mobile';
import { BjuryPage } from '../bjury/bjury';
import { ConcoursPage } from '../concours/concours';
import { AproposPage } from '../apropos/apropos';
import { MainPage } from '../main/main';

/**
 * Generated class for the CategoriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorie',
  templateUrl: 'categorie.html',
})
export class CategoriePage {

  constructor(public modalCtrl: ModalController,public viewctrl: ViewController,private popoverCtrl: PopoverController,public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriePage');
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
  
  critere(event: any){
   // let popover = this.popoverCtrl.create(WebsitePage, {}, {
     // cssClass: 'settings-popover'
    //});
   // popover.present({ev: event});
 // }

  let popover = this.popoverCtrl.create(WebsitePage,{}, {cssClass: 'contact-popover'});
  popover.present({
    ev: event
});
  }
  eshop(event:any){
    let popover = this.popoverCtrl.create(EshopPage,{}, {cssClass: 'contact-popover'} , );
    
  popover.present({
    ev: event
});

  }
  digital(event:any){
    let popover = this.popoverCtrl.create(DigitalPage,{}, {cssClass: 'contact-popover'});
  popover.present({
    ev: event
});
  }
  startup(event:any){
    let popover = this.popoverCtrl.create(StartupPage,{}, {cssClass: 'contact-popover'});
  popover.present({
    ev: event
});
  }
  seo(event:any){
    let popover = this.popoverCtrl.create(SeoPage,{}, {cssClass: 'contact-popover'});
  popover.present({
    ev: event
});
  }influenceur(event:any){
    let popover = this.popoverCtrl.create(InfluenceurPage,{}, {cssClass: 'contact-popover'});
  popover.present({
    ev: event
});
  }
  mobile(event:any){
    let popover = this.popoverCtrl.create(MobilePage,{}, {cssClass: 'contact-popover'});
  popover.present({
    ev: event
});
  }
  jury(event:any){
    let popover = this.popoverCtrl.create(BjuryPage,{}, {cssClass: 'contact-popover'});
  popover.present({
    ev: event
});
  }
  
}
