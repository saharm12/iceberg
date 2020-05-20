import { Component } from '@angular/core';
import { NavController ,LoadingController,  AlertController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { RegisterPage } from '../register/register';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';
import { FirstPage } from '../first/first';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mail:string; 
psw:string ;
  loginGroup:FormGroup
  constructor(private Rest :RestProvider , public navCtrl: NavController, myformBuilder:FormBuilder , 
    private loadingCtrl: LoadingController , private alertCtrl: AlertController,
    )
  
  {
    this.loginGroup = myformBuilder.group({
      email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      password:['',Validators.required]
    })

  }
  
  connect()
  {this.Rest.loginUser(this.loginGroup.controls['email'].value,this.loginGroup.controls['password'].value).subscribe(allowed =>
     {let result:any =allowed ;
     console.log(result);
   if (result.user==true){
    this.showWelcome("Bienvenue!!!");
    localStorage.setItem('id',result.id); 
    localStorage.setItem('token',result.token);  
     this.navCtrl.setRoot(MainPage);
   
     
    } else {
   this.showError("Email ou mdp incorrecte");
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
    message:' E-mail ou mot de passe incorrecte',
   buttons:[{
     text:'ok',
    handler:()=>{console.log('OK')
    } }]
 });
  alert.present();

}

showWelcome(text){
  console.log("Bienvenue");
  let alert =this .alertCtrl.create({
    title:'Bienvenue!',
   // message:'Bienvenue',
   buttons:[{
     text:'ok',
    handler:()=>{console.log('OK')
    } }]
 });
  alert.present();

}





  register(){
    this.navCtrl.push(RegisterPage);

  }
  passer(){
    this.navCtrl.push(FirstPage);
  }



       
    
   
 





}