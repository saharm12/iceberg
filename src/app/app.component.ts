import { Component ,ViewChild} from '@angular/core';
import { Platform , Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SponsorsPage } from '../pages/sponsors/sponsors';
import { MeetingPage } from '../pages/meeting/meeting';
import { ReglePage } from '../pages/regle/regle';
import { JurryPage } from '../pages/jurry/jurry';
import { InscriptionPage } from '../pages/inscription/inscription';
import { MapPage } from '../pages/map/map';
import { ChatPage } from '../pages/chat/chat';
import { MainPage } from '../pages/main/main';
import { EnquetePage } from '../pages/enquete/enquete';
import {timer} from 'rxjs/observable/timer';
import { DocumentPage } from '../pages/document/document';
import { TabsPage } from '../pages/tabs/tabs';
import {FirstPage} from '../pages/first/first';
import { AproposPage } from '../pages/apropos/apropos';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = FirstPage;
  rotPage:any = TabsPage;
  MainRoot=MainPage;
  pages: Array<{title: string, component: any, icon: string}>;
  @ViewChild(Nav) nav; Nav;
showSplash = true;
  constructor( platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
     
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false)
    });

    this.pages = [
      { icon: 'home' ,title: 'Acceuil',   component: MainPage  },
      { icon: 'md-copy',  title: '  Réglement', component: ReglePage,},
      {   title: ' Télècharger Documentation',  icon: 'md-download' , component: DocumentPage , },
      
      { icon: 'md-contacts' ,title: ' Jurys', component: JurryPage  },
     // { icon: 'md-list' ,title: ' Inscription ', component: InscriptionPage  },
      { icon: 'md-people' ,title: ' Sponsors & Partenaires', component: SponsorsPage  },
    
      { icon: 'md-chatboxes' ,title: 'Chat', component: ChatPage  },
     
      { icon: 'md-star-half' ,title: ' Remplir enquete de satisfaction', component: EnquetePage   },
      { icon: 'md-locate' ,title: ' Google Map', component: MapPage  },
      { icon: 'md-information-circle' ,title: ' Apropos', component: AproposPage  }

        ];
    
  }
  
  openPage(page) {

    

    

   
        this.nav.setRoot(page.component);
       


}
  
logout(){

   localStorage.clear();


   this.nav.setRoot(HomePage)
}
 
  
backToWelcome(){
  //const root = this.app.getRootNav();
  //root.popToRoot();
  this.nav.setRoot(HomePage);
}
}

