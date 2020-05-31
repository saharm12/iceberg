import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {  FileUploader  } from 'ng2-file-upload';
import { CandidatProvider } from '../../providers/candidat/candidat';
import {  FormGroup ,FormControl, Validators} from "@angular/forms";

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
  public uploader:FileUploader ;
 fileURL="";

  constructor(private CanditProv: CandidatProvider ,public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
   // const authHeader: Array<{
    //  name: string;
      //value: string;
  //}> = [];
  
  //let token = localStorage.getItem('token');
  //authHeader.push({name: 'x-access-token', value: token});
 // const uploadOptions = {headers : authHeader};
  //adding uploader service url
  //this.uploader = new FileUploader({ url: 'http://localhost:3000/candidat/addfile',itemAlias: 'userfile'});
  //this.uploader.setOptions(uploadOptions);
    
  
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



   /*this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
  };*/
  

  

  AjouterCandidat()
  {  // this.uploader.uploadAll();

let data = new FormData(); 

  data.append('userfile',this.uploadedFile);
  this.http.post('http://localhost:3000/candidat/addfile',data).subscribe(data=>{
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
