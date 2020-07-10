import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SponsorsProvider} from '../../providers/sponsors/sponsors'
import { PartenaireProvider} from '../../providers/partenaire/partenaire'
/**
 * Generated class for the SponsorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html',
})
export class SponsorsPage {
  sponsors=[];
  partenair=[];

  base_url="http://localhost:3000"
  constructor(private partProvider : PartenaireProvider , public navCtrl: NavController, public navParams: NavParams, private sponProv : SponsorsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SponsorsPage');
  }

  ngOnInit() {
    

    this.getsponsors();
    this.getpartenaire();
  }

  getsponsors()
  { 
      
      this.sponProv.getsponsors().subscribe(data=>{
      

        let result:any = data; 
        console.log(result.sponsors); 
       

        this.sponsors = result.sponsors; 
        

      })
    
  }

  getpartenaire()
  { 
      
      this.partProvider.getpartenaire().subscribe
      (data=>{
      

        let result:any = data; 
        console.log(result.partenaires); 
       

        this.partenair = result.partenaires; 
        

      })
    
  }
}
