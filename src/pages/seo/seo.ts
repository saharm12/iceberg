import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , PopoverController,ViewController} from 'ionic-angular';
import { CategoriePage } from '../categorie/categorie';

/**
 * Generated class for the SeoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seo',
  templateUrl: 'seo.html',
})
export class SeoPage {

  constructor(public viewCtrl: ViewController,private popoverCtrl: PopoverController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeoPage');
  }
fermer(){
  this.viewCtrl.dismiss();

}
}
