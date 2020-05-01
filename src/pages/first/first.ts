import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastctrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }
  //slider =[
    //{
      //title: 'tunisia digital awards',
      //description: 'jhfjfkfldm',
     //image: "assets/imgs/sana.jpg"
    //},
    //{
      //title: 'tunisia digital awards',
      //description: 'jhfjfkfldm',
     // image: "assets/imgs/sana.jpg"
//}
  //];
  //slidechanged(){
    //this.toastctrl.create({
     // message:`slide  été changer`
    //}).present();
  //}
  
}