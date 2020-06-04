import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {  FileUploader  } from 'ng2-file-upload';
import { CandidatProvider } from '../../providers/candidat/candidat';
import {  FormGroup ,FormControl, Validators} from "@angular/forms";
import {Candidat} from "./candidat.model"
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
  uploadedFile:File ;
  secondFile :File ; 

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


  constructor(private CanditProv: CandidatProvider ,public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {

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
 
 

  this.http.post('http://localhost:3000/candidat/addfiles',data ).subscribe(data=>{
  let result:any =data; 
    console.log(result);
  })
//this.CanditProv.PostCandit(data).subscribe(data=>{
   // let result :any = data; 
   // if(result)
    //{ 
   
     //console.log("ok")
     
      
      
   // }
 //})
 
}

  
}
