import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad EnquetePage");
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
    })
    console.log(this.repQestion1);
  }
}
