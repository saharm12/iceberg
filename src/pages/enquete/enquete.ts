import { Component } from "@angular/core";
import { IonicPage, ToastController,AlertController,NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { MainPage } from "../main/main";
import { AproposPage } from "../apropos/apropos";

/**
 * Generated class for the EnquetePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-enquete",
  templateUrl: "enquete.html",
})
export class EnquetePage {
  repQestion1: string = "A";
  repQestion2: string = "A";
  repQestion3: string = "A";
  repQestion4: string = "A";
  repQestion5: string = "";
  repQestion6: string = "";
  constructor(private toastCtrl: ToastController,private alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad EnquetePage");
  }
  main(){
    this.navCtrl.setRoot(MainPage);
  }
  apropos(){
    this.navCtrl.setRoot(AproposPage);
  
  }
  return(){
    this.navCtrl.setRoot(MainPage);
  }

  addResp() {}
  goNext() {
    let userResp = [
      {
        numQuestion: 1,
        resp: this.repQestion1,
      },
      {
        numQuestion: 2,
        resp: this.repQestion2,
      },
      {
        numQuestion: 3,
        resp: this.repQestion3,
      },
      {
        numQuestion: 4,
        resp: this.repQestion4,
      },
      {
        numQuestion: 5,
        resp: this.repQestion5,
      },
      {
        numQuestion: 6,
        resp: this.repQestion6,
      },
    ];
    let userId = localStorage.getItem('id');
    this.http.post('http://localhost:3000/satisfaction/add',{
      userResp:userResp,     
      id:userId
    }).subscribe(data=>{ 
      let result:any =data ; 
      console.log(result); 
      if(result){
        this.presentToast();

      }
    })
    console.log(this.repQestion1);
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Votre réponse a été bien enregistrer',
      duration: 3000,
      cssClass:'iontoast',
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
