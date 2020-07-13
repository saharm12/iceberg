import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentProvider} from '../../providers/document/document';
import { MainPage } from '../main/main';
import { MapPage } from '../map/map';
import { AproposPage } from '../apropos/apropos';

/**
 * Generated class for the DocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-document',
  templateUrl: 'document.html',
})
export class DocumentPage {
  documents=[];
  base_url="http://localhost:3000"
 
  tab1 = MainPage;
  tab2 = MainPage;
  constructor(private docProv:DocumentProvider, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentPage');
  }
  ngOnInit() {
    this.getDocument();
  
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

  getDocument(){
    {   
      this.docProv.getDocument().subscribe(data=>{
      
  
        let result:any = data; 
        console.log(result.laureats); 
       
  
        this.documents = result.document; 
        
  
      })
   }
  
  }}
