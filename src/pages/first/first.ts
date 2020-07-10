import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

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
    console.log("token", localStorage.getItem("token"));
    if(localStorage.getItem("token")!= null){
   
     this.navCtrl.setRoot(HomePage);
   
    }    
  
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }
  inscrire(){
    this.navCtrl.push(HomePage);
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