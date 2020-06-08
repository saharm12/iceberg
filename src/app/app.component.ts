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
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;
  @ViewChild(Nav) nav; Nav;

  constructor( platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      {   title: ' Télècharger Documentation', component: MeetingPage },
      { title: '  Réglement', component: ReglePage},
      { title: ' Jurys', component: JurryPage},
      { title: ' Inscription ', component: InscriptionPage},
      { title: ' Sponsors & Partenaires', component: SponsorsPage},
      { title: ' Google Map', component: MapPage},
      { title: 'Chat', component: ChatPage },
      { title: 'Acceuil', component: MainPage },
      { title: ' Remplir enquete de satisfaction', component: EnquetePage },
      { title: ' Déconnnexion', component: HomePage },
    ];
  }
  openPage(page) { this.nav.setRoot(page.component);

  }
  
}

