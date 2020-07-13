import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaureatProvider } from '../../providers/laureat/laureat';
import { MainPage } from '../main/main';
import { AproposPage } from '../apropos/apropos';

/**
 * Generated class for the LaureatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laureat',
  templateUrl: 'laureat.html',
})
export class LaureatPage {
  lauts= []; 
  base_url="http://localhost:3000"
  constructor(private LauProv: LaureatProvider,public navCtrl: NavController, public navParams: NavParams) {
  
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LaureatPage');
  }
  main(){
    this.navCtrl.setRoot(MainPage);
  }
  apropos(){
    this.navCtrl.setRoot(AproposPage);
  
  }
  return(){
    this.navCtrl.setRoot(MainPage);
  }

  ngOnInit() { this.getLaureat()
  }

  getLaureat()
  { 
    {   
      this.LauProv.getLaureat().subscribe(data=>{
      

        let result:any = data; 
        console.log(result.laureats); 
       

        this.lauts = result.laureats; 
        

      })
  }
  }}
