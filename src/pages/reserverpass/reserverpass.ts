import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  , AlertController} from 'ionic-angular';
import {Participant} from "./reserver.model";
import { PartProvider } from '../../providers/part/part';
/**
 * Generated class for the ReserverpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reserverpass',
  templateUrl: 'reserverpass.html',
})
export class ReserverpassPage {
paiement=[];
createSuccess = false;

modelpart: Participant;


  constructor(private alertCtrl: AlertController ,public navCtrl: NavController, public navParams: NavParams, private Part:PartProvider ){
    
  
   

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
  
this.modelpart = new Participant();
    
   
      
  }

    



  ionViewDidLoad() {
    console.log('ionViewDidLoad ReserverpassPage');
  }

  Soumettre(){
  this.Part.Registerpart(this.modelpart.nom, this.modelpart.prenom, this.modelpart.email, this.modelpart.adresse, this.modelpart.code_postale, this.modelpart.raison_sociale, this.modelpart.TVA, this.modelpart.Ville, this.modelpart.reserver, this.modelpart.programme, this.modelpart.paiement, this.modelpart.num_cheque)
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
