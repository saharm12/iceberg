import { Component } from '@angular/core';
import { NavController ,LoadingController,  AlertController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { RegisterPage } from '../register/register';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';
import { FirstPage } from '../first/first';
import { ToastController, ToastOptions } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabBarElement: any;
  splash = true;
  mail:string; 
psw:string ;
toastOptions:ToastOptions;
  loginGroup:FormGroup
  constructor(private toastCtrl: ToastController,private Rest :RestProvider , public navCtrl: NavController, myformBuilder:FormBuilder , 
    private loadingCtrl: LoadingController , private alertCtrl: AlertController,
    )
   
  {

    console.log("token", localStorage.getItem("token"));
 if(localStorage.getItem("token")!== null){

  this.navCtrl.setRoot(MainPage);

 }    
    this.loginGroup = myformBuilder.group({
      email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      password:['',Validators.required]
    })
    this.tabBarElement = document.querySelector('.tabbar');
  }
  ionViewDidLoad() {
    
    setTimeout(() => this.splash = false, 7000);
  }
  
  connect()
  {this.Rest.loginUser(this.loginGroup.controls['email'].value,this.loginGroup.controls['password'].value).subscribe(allowed =>
     {let result:any =allowed ;
     console.log(result);
   if (result.user==true){
     console.log(result.user.role)
     if(result.role==0){
      this.presentToast();

    //this.showWelcome("Bienvenue!!!");
    localStorage.setItem('id',result.id); 
    localStorage.setItem('token',result.token);  
     this.navCtrl.setRoot(MainPage);
   
    
    } else {
   this.showError();
     }
    
    }else{
      this.showError();

    }
   },
  //error =>  {console.log("erreur"); } );
  error => {
    this.showError();
  });
 }
 
 presentToast() {
  
  this.toastOptions = {
    message: "Bienvenue",
    position : "top",
    duration: 3000,
    cssClass: "info",
  
    

  }
  this.toastCtrl.create(this.toastOptions).present();
  }
  
  
  


showError(){
  console.log("erreur");
  let alert =this .alertCtrl.create({
    title:'Erreur',
    message:' E-mail ou mot de passe incorrecte',
   buttons:[{
     text:'ok',
    handler:()=>{console.log('OK')
    } }]
 });
  alert.present();

}

showWelcome(){
  console.log("Bienvenue");
  let alert =this .alertCtrl.create({
    title:'Bienvenue!',
   // message:'Bienvenue',
   buttons:[{
     text:'ok',
    handler:()=>{console.log('OK')
    } }]
 });



}



  register(){
    this.navCtrl.push(RegisterPage);

  }
  passer(){
    this.navCtrl.setRoot(FirstPage);
  }



       
    
   
 





}