import { Component } from '@angular/core';
import { IonicPage, NavController,  AlertController ,NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;


registerForm :FormGroup ; 
  constructor(  private alertCtrl: AlertController, private http:HttpClientModule ,private Rest: RestProvider, public nav: NavController, public navParams: NavParams , public toastCtrl: ToastController, private formBuilder: FormBuilder, ) {
    this.registerForm = formBuilder.group({
      email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      password: ['',Validators.required], 
      confirmPassword:['',Validators.required], 
      nom:['',Validators.required], 
      prenom:['',Validators.required]
    }) ; 

  }
  
  confirmer(){
    if (this.registerForm.controls['password'].value != this.registerForm.controls['confirmPassword'].value ){
      this.showPopup("Echec", 'mot de passe et Confirmer mot de passe ne sont pas conforme veuillez vérifier!.');
    }else { 
        this.Rest.registerUser(this.registerForm.controls['nom'].value,this.registerForm.controls['prenom'].value,this.registerForm.controls['email'].value,this.registerForm.controls['password'].value)
        .subscribe( success => {
          if (success) {
            this.createSuccess = true;
          this.showPopup("Félicitation", "compte créer avec succés.");
        }else{
          this.showPopup("Erreur", "Probléme lors de création de compte!.");
        }
      },
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

  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad RegisterPage');
 // }

  




  showToast(msg)
  {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    }) ; 
    toast.present(); 
  }
}
