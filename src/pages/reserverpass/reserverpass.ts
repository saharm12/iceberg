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
 paiementCheque : boolean = false;


  modelpart: Participant;


  constructor(private alertCtrl: AlertController ,public nav: NavController, public navParams: NavParams, private Part:PartProvider ){
    
  
   

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
    
    if (this.modelpart.programme != "TDA/or" && this.modelpart.programme != "TDA/silver" && this.modelpart.programme != "TDA/Diamand" ){
      this.showPopup("Echec", 'champ programme incorrecte  ');
    }  else { 
             
        //(this.modelpart.paiement == "Chéque" ){
             //this.paiementCheque = true;
             
            
        
  this.Part.Register(this.modelpart.nom, this.modelpart.prenom, this.modelpart.email, this.modelpart.adresse, this.modelpart.code_postale, this.modelpart.raison_sociale, this.modelpart.TVA, this.modelpart.Ville, this.modelpart.reserver, this.modelpart.programme, this.modelpart.paiement, this.modelpart.num_cheque)
    .subscribe ( success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Félicitation", "compte créer avec succés.");
      } else {
        this.showPopup("Erreur", "Probléme lors de création de compte!.");
          }
        },
       //error =>  {console.log("erreur"); } );
       error => {
         this.showPopup("Error", error);
       });
            }
  
    }
      showPopup(title, text) {
        let alert = this.alertCtrl.create({
          title: title,
          subTitle: text,
          buttons: [
            {
              text: 'OK',
              handler: data => {
                if (this.createSuccess) {
                  this.nav.popToRoot();
                }
              }
            }
          ]
        });
        alert.present();
      }
    
  

  

}
