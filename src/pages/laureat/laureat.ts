import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaureatProvider } from '../../providers/laureat/laureat';

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
