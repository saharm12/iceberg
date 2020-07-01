import { Component } from '@angular/core';
import { IonicPage, NavController,  AlertController ,NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
      email: ['', Validators.compose([Validators.maxLength(70),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.required])],
      password: ['', Validators.compose([Validators.maxLength(20),Validators.minLength(2), Validators.required])], 
      confirmPassword:['', Validators.compose([Validators.maxLength(20),Validators.minLength(2), Validators.required])], 
      nom:['', Validators.compose([Validators.maxLength(20),Validators.minLength(2), Validators.pattern('[a-zA-Z ]*'),Validators.required])], 
      prenom:['', Validators.compose([Validators.maxLength(20),Validators.minLength(2),Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    }) ; 

  }
  validation_messages = {
    'nom': [
        { type: 'required', message: 'champ nom est vide.' },
        { type: 'minlength', message: ' champ nom doit contenir au moins 3 caractére.' },
        { type: 'maxlength', message: 'champ nom doit contenir au maximum 20 caractére.' },
        { type: 'pattern', message: 'champ nom doit contenir que des caractéres.' },
        { type: 'validUsername', message: 'Your username has already been taken.' }
      ],
      'prenom': [
        { type: 'required', message: 'champ prénom est vide.' },
        { type: 'minlength', message: ' champ prénom doit contenir au moins 3 caractére.' },
        { type: 'maxlength', message: 'champ prénom doit contenir au maximum 20 caractére.' },
        { type: 'pattern', message: 'champ prénom doit contenir que des caractéres.' },
        { type: 'validUsername', message: 'Your username has already been taken.' }
      ],
      'email': [
        { type: 'required', message: 'champ email est vide.' },
        { type: 'maxlength', message: 'champ email doit contenir au maximum 20 caractére.' },
        { type: 'pattern', message: 'champ email est incorrecte.' },
        { type: 'validUsername', message: 'Existe déja un compte avec ce E-mail' }
      ],
      'confirmPassword': [
        { type: 'required', message: 'champ  confirmer mot de passe est vide.' },
        { type: 'minlength', message: ' champ  confirmer mot de passe  doit contenir au moins 3 caractére.' },
        { type: 'maxlength', message: 'champ  confirmer mot de passe doit contenir au maximum 20 caractére.' },
      
      ],
      'password': [
        { type: 'required', message: 'champ  Mot de passe est vide.' },
        { type: 'minlength', message: ' champ  Mot de passe  doit contenir au moins 3 caractére.' },
        { type: 'maxlength', message: 'champ  Mot de passe doit contenir au maximum 20 caractére.' },
       
      ],
    
 
    }
    validateAllFormFields(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach(field => {
        console.log(field);
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        }
      });
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

  confirmer(){
    this.Rest.checkemailNotTaken(this.registerForm.controls['email'].value).subscribe((res:any)=>{
      console.log(res.emailNotTaken)
     if(!res.emailNotTaken)
     { 
       
      this.showPopup("Erreur!!","Email deja existant veuillez saisir un autre.");
       
     }else{
       
    if (this.registerForm.invalid){
      this.validateAllFormFields(this.registerForm);
    }else{
    if (this.registerForm.controls['password'].value != this.registerForm.controls['confirmPassword'].value ){
      this.showPopup("Echec", 'mot de passe et Confirmer mot de passe ne sont pas conforme veuillez vérifier!.');
    
    }else { 
        this.Rest.registerUser(this.registerForm.controls['nom'].value,this.registerForm.controls['prenom'].value,this.registerForm.controls['email'].value,this.registerForm.controls['password'].value,false)
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
  }}
}
    )}

}
