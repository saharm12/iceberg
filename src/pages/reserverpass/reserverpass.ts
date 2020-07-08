import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  , AlertController} from 'ionic-angular';
import {Participant} from "./reserver.model";
import { PartProvider } from '../../providers/part/part';
import { MeetingPage } from '../meeting/meeting';
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
 type_part=[];

  modelpart: Participant;

  programme=[]
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

    this.type_part=[
      {
        title:"Etudiant"
      },
      {
        title:"Enseignant"
      },
      {
        title:"Professionel"
      }
    ]
    
    this.programme=[
      {
        title:"TDA or"
      },
      {
        title:"TDA silver"
      },
      {
        title:"TDA Diamond"
      }
    ]
  
this.modelpart = new Participant();
      
  }

    



  ionViewDidLoad() {
    console.log('ionViewDidLoad ReserverpassPage');
    

  }
  ngOnInit() {
   this.getCount();
  }
  Soumettre(){  
  

    this.Part.checkemailNotTaken(this.modelpart.email).subscribe((res:any)=>{
       console.log(res.emailNotTaken)
      if(!res.emailNotTaken)
      { 
       this.showPopup("Erreur!!","Email deja existant veuillez saisir un autre.");
        
      }else{

    
      this.Part.Register(this.modelpart.nom, this.modelpart.prenom, this.modelpart.email, this.modelpart.adresse, this.modelpart.code_postale, this.modelpart.raison_sociale, this.modelpart.TVA, this.modelpart.Ville, this.modelpart.reserver, this.modelpart.programme ,this.modelpart.type_participant, this.modelpart.paiement, this.modelpart.num_cheque)
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
      })
      
  
    }

    getCount(){
      {   
        this.Part.getcountpart().subscribe((res:any)=>{
        
          console.log("res", res);
         // let result:any = res; 
          console.log("res", res.participant);
         if(res.particpant >= 55){
            
            this.showPopup("Erreur", "inscription a été expiré.");
    
          } 
         
    
    
          
    
        })
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
    
  

  


      telecharger(){
        this.nav.push(MeetingPage);
      } 

     

}
