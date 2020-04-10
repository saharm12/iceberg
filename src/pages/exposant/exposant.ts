import { Component ,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams ,  AlertController} from 'ionic-angular';
import { ProvidersRestExpoProvider } from '../../providers/providers-rest-expo/providers-rest-expo';
import {Exposant} from "./exposant.model";



/**
 * Generated class for the ExposantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exposant',
  templateUrl: 'exposant.html',
})
export class ExposantPage {

  expoModel:Exposant;

  paiement=[];
  
  createSuccess = false;
  constructor(  private alertCtrl: AlertController ,public nav: NavController ,private Expo: ProvidersRestExpoProvider ,public navCtrl: NavController, public navParams: NavParams,) {
  
    this.paiement=[
      {
        title:"Virement"
      },
      {
        title:"Chéque"
      },
      {
        title:"Espèce"
      }
    ]
    this.expoModel=new Exposant();
   
  }

  ngOnInit() {}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ExposantPage');
  }

Soumettre(){
  
  this.Expo.Registerexpo(this.expoModel.name, this.expoModel.firstname, this.expoModel.Email,this.expoModel.telephone,this.expoModel.raison,this.expoModel.adresse,this.expoModel.postale, this.expoModel.ville,this.expoModel.Pays, this.expoModel.mobile,this.expoModel.TVA, this.expoModel.paiement, this.expoModel.cheque)
  .subscribe ( success => {
    if (success) {
      this.createSuccess = true;
      this.showEnregistrer("Félicitation!!!");
    } else {
      this.showError("Erreur");
        }
      },
     //error =>  {console.log("erreur"); } );
     error => {
       this.showError(error);
     });
    }

    showError(text){
      console.log("erreur");
      let alert =this .alertCtrl.create({
        title:'Erreur',
        message:'',
       buttons:[{
         text:'ok',
        handler:()=>{console.log('OK')
        } }]
     });
      alert.present();}
    
      showEnregistrer(text){
        console.log("Espace réserver");
        let alert =this .alertCtrl.create({
          title:'Félicitation!',
         // message:'Bienvenue',
         buttons:[{
           text:'ok',
          handler:()=>{console.log('OK')
          } }]
       });
        alert.present();
      
      }
      
  
      
        
}




