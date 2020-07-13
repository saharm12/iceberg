import { Component,OnInit } from '@angular/core';
import { IonicPage, ToastController,NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {  FileUploader  } from 'ng2-file-upload';
import { CandidatProvider } from '../../providers/candidat/candidat';
import {  FormGroup ,FormControl, Validators} from "@angular/forms";
import {Candidat} from "./candidat.model"
import { ReglePage } from '../regle/regle';
import { MeetingPage } from '../meeting/meeting';
import { MainPage } from '../main/main';
import { AproposPage } from '../apropos/apropos';
/**
 * Generated class for the CandidatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-candidat',
  templateUrl: 'candidat.html',
})
export class CandidatPage {
  categories=[];
  createSuccess = false;

  uploadedFile:File ;
  secondFile :File ; 
  ischecked : boolean ;
  public uploader:FileUploader ;
  canditModel : Candidat;
 fileURL="";
ste=""; 
email="";
respon="";
adresse="";
codepostale="";
GSM="";
siteweb="";
client="";
categorie="";


  constructor(private toastCtrl: ToastController,private alertCtrl: AlertController,private CanditProv: CandidatProvider ,public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {

    this.canditModel= new Candidat();
  
  this.categories=[
      {
        title:"Best Web Site"
      },
      {
        title:"Best Mobile App"
      },
      {
        title:"Best E.shop"
      },
      {
        title:"Best Digital Campaign"
      },
      {
        title:"Best Digital Start Up "
      },
      {
        title:"Best SEO / SEA of the year"
      },
      {
        title:"Best Social Media Influencer"
      },
      {
        title:"Best Jury Awards"
      }

    ]
   
  }

  
 // myForm = new FormGroup({  
    //image: new FormControl('', [Validators.required]),
    
  
   //}); 
  
  

  ionViewDidLoad() {
    //this.uploader.onAfterAddingFile = (file) => {
     // this.fileURL="/uploads/"+file.file.name;
      //file.withCredentials = false; 
    // };
  }
  main(){
    this.navCtrl.push(MainPage);
  }
  apropos(){
    this.navCtrl.push(AproposPage);
  
  }
  return(){
    this.navCtrl.push(MainPage);
  }
  

  fileChange(element) {
   this.uploadedFile = element.target.files[0];
}


secondFileUplouad(element) {
  this.secondFile = element.target.files[0];
}


   /*this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
  };*/
  

  

  AjouterCandidat()
  {  // this.uploader.uploadAll();
let userFiles:File[]=[]; 
userFiles.push(this.uploadedFile); 
userFiles.push(this.secondFile); 
let data = new FormData(); 
data.append('ste',this.ste); 
data.append('respon',this.respon); 
data.append('adresse',this.adresse); 
data.append('codepostale',this.codepostale); 
data.append('candidatEmail',this.email); 
data.append('GSM',this.GSM); 
data.append('siteweb',this.siteweb); 
data.append('client',this.client); 
data.append('categorie',this.categorie); 
data.append('firstfile',this.uploadedFile);
data.append('secondfile',this.secondFile); 

this.CanditProv.checkemailNotTaken(this.email).subscribe((res:any)=>{
  console.log(res.emailNotTaken)
 if(!res.emailNotTaken)
 { 
  this.presentToastemail()   
 }else{
  this.CanditProv.checkGSMNotTaken(this.GSM).subscribe((res:any)=>{
    console.log(res.emailNotTaken)
   if(!res.emailNotTaken)
   { 
    this.presentToastGSM()   
   }else{



  this.http.post('http://localhost:3000/candidat/addfiles',data ).subscribe(data=>{
  let result:any =data; 
    console.log(result);
    if(result){
      this.showPopup("Félicitation", "Votre inscription a été effectués avec succés");
    }
  })
//this.CanditProv.PostCandit(data).subscribe(data=>{
   // let result :any = data; 
   // if(result)
    //{ 
   
     //console.log("ok")
   
      
      
   // }
 //})
 
}}
 
  )}
}
)}

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

presentToastGSM() {
  let toast = this.toastCtrl.create({
    message: 'GSM deja existant veuillez saisir un autre!!',
    duration: 3000,
    cssClass:'iontoast',
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
lire(){
  this.navCtrl.push(ReglePage);
}

telecharger(){
  this.navCtrl.push(MeetingPage);
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
            this.navCtrl.popToRoot();
          }
        }
      }
    ]
  });
  alert.present();
}
}
