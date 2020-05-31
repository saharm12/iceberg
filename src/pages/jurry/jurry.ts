import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JuryProvider } from '../../providers/jury/jury';

/**
 * Generated class for the JurryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jurry',
  templateUrl: 'jurry.html',
})
export class JurryPage {
  jurys=[];

  base_url="http://localhost:3000"

  constructor(private juryProv: JuryProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JurryPage');
  }
  ngOnInit() {
    this.getjury(); 

    
    
  }
  getjury()
  { 
   {
     this.juryProv.getjury().subscribe(data=>{
       let result:any = data; 
       console.log(result.membre_jury); 
       this.jurys= result.membre_jury; 
     })
 }
 } 
}
