import { Component ,OnInit } from '@angular/core';
import { IonicPage, ToastController,NavController, NavParams ,  AlertController} from 'ionic-angular';
import { ProvidersRestExpoProvider } from '../../providers/providers-rest-expo/providers-rest-expo';
import {Exposant} from "./exposant.model";
import { MeetingPage } from '../meeting/meeting';
import { MainPage } from '../main/main';
import { AproposPage } from '../apropos/apropos';



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
  constructor(  private toastCtrl: ToastController,private alertCtrl: AlertController ,public nav: NavController ,private Expo: ProvidersRestExpoProvider ,public navCtrl: NavController, public navParams: NavParams,) {
  
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
  main(){
    this.navCtrl.push(MainPage);
  }
  apropos(){
    this.navCtrl.push(AproposPage);
  
  }
  return(){
    this.navCtrl.setRoot(MainPage);
  }

Soumettre(){
  
  this.Expo.checkmobileNotTaken(this.expoModel.mobile).subscribe((res:any)=>{
    console.log(res.mobileNotTaken)
    if(!res.mobileNotTaken)
    { 
      this.presentToastmobile()
     //this.showEr("Numéro de télèphone déjà existant veuillez saisir un autre.");
      
    }else{
  this.Expo.checktelNotTaken(this.expoModel.telephone).subscribe((res:any)=>{
    console.log(res.telNotTaken)
    if(!res.telNotTaken)
    { 
      this.presentToast()
     //this.showEr("Numéro de télèphone déjà existant veuillez saisir un autre.");
      
    }else{
      

  
  this.Expo.checkemailNotTaken(this.expoModel.Email).subscribe((res:any)=>{
    console.log(res.emailNotTaken)
   if(!res.emailNotTaken)
   { 
    this.presentToastemail();
     
   }else{
  
  this.Expo.Registerexpo(this.expoModel.name, this.expoModel.firstname, this.expoModel.Email,this.expoModel.telephone,this.expoModel.raison,this.expoModel.adresse,this.expoModel.postale, this.expoModel.ville,this.expoModel.Pays, this.expoModel.mobile,this.expoModel.TVA, this.expoModel.paiement, this.expoModel.cheque)
  .subscribe ( success => {
    if (success) {
      this.createSuccess = true;
      this.showEnregistrer(" Votre inscription a été bien enregistrer");
    } else {
      this.showError("Veuillez verfier tous les données saisies!!");
        }
      },
     //error =>  {console.log("erreur"); } );
     error => {
       this.showError(error);
     });
    }
  }) 
}
  })
}
})
    }

    showError(text){
      console.log("erreur");
      let alert =this .alertCtrl.create({
        title:'Erreur',
        message:'Veuillez verfier tous les données saisies!!',
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


      
      presentToastmobile() {
        let toast = this.toastCtrl.create({
          message: 'Mobile deja existant veuillez saisir un autre!!',
          duration: 3000,
          cssClass:'iontoast',
          position: 'top'
        });
      
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
      
        toast.present();
      }



      presentToastemail() {
        let toast = this.toastCtrl.create({
          message: 'Email deja existant veuillez saisir un autre!!',
          duration: 3000,
          cssClass:'iontoast',
          position: 'top'
        });
      
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
      
        toast.present();
      }
   
      presentToast() {
        let toast = this.toastCtrl.create({
          message: 'Numéro de télèphone déjà existant veuillez saisir un autre!!',
          duration: 3000,
          cssClass:'iontoast',
          position: 'top'
        });
      
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
      
        toast.present();
      }
    
      telecharger(){
        this.navCtrl.push(MeetingPage);
      }
      
     
    
  

      
        
}




