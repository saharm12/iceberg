import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , Navbar,  Platform } from 'ionic-angular';
import {SponsorsProvider} from '../../providers/sponsors/sponsors'
import { PartenaireProvider} from '../../providers/partenaire/partenaire'
import { HomePage } from '../home/home';
import { AproposPage } from '../apropos/apropos';
import { MainPage } from '../main/main';
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
  @ViewChild(Navbar) navBar: Navbar;


  base_url="http://localhost:3000"
  constructor(public platform: Platform,private partProvider : PartenaireProvider , public navCtrl: NavController, public navParams: NavParams, private sponProv : SponsorsProvider) {
  
  
  }

  ionViewDidLoad() {
 


  
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
  backButton(){
    

  }
  setBackButtonAction(){
    this.navBar.backButtonClick = () => {
    //Write here wherever you wanna do
     this.navCtrl.pop()
    }
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
