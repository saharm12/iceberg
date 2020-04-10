import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CandidatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-candidat',
  templateUrl: 'candidat.html',
})
export class CandidatPage {
  categories=[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categories=[
      {
        title:"Best Web Site"
      },
      {
        title:"Best Mobile App"
      },
      {
        title:"Best E.shop"
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CandidatPage');
  }

}
