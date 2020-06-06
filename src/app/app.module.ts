import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Popover } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { RegisterPage } from '../pages/register/register';
import { InscriptionPage } from '../pages/inscription/inscription';
import{ MeetingPage} from '../pages/meeting/meeting';
import { ConcoursPage } from '../pages/concours/concours';
import { CandidatPage } from '../pages/candidat/candidat';
import { ExposantPage } from '../pages/exposant/exposant';
import { ParticipantPage } from '../pages/participant/participant';
import {HttpClientModule} from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { ReserverpassPage } from '../pages/reserverpass/reserverpass';
import { ProvidersRestExpoProvider } from '../providers/providers-rest-expo/providers-rest-expo';
import { PartProvider } from '../providers/part/part';
import{JurryPage}    from   '../pages/jurry/jurry' ;
import {LaureatPage} from   '../pages/laureat/laureat';
import {FirstPage} from '../pages/first/first';
import {CategoriePage} from '../pages/categorie/categorie';
import  {WebsitePage} from  '../pages/website/website';
import{EshopPage} from '../pages/eshop/eshop';
import { DigitalPage} from '../pages/digital/digital';
  import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { StartupPage } from '../pages/startup/startup';
import { SeoPage } from '../pages/seo/seo';
import { InfluenceurPage } from '../pages/influenceur/influenceur';
import { MobilePage } from '../pages/mobile/mobile';
import { BjuryPage } from '../pages/bjury/bjury';
import { ReglePage } from '../pages/regle/regle';
import { MapPage } from '../pages/map/map';
import { LaureatProvider } from '../providers/laureat/laureat';
import { Geolocation } from '@ionic-native/geolocation';
import { CandidatProvider } from '../providers/candidat/candidat';
import { FileUploadModule } from 'ng2-file-upload';
import { JuryProvider } from '../providers/jury/jury';
import { SpeakerProvider } from '../providers/speaker/speaker';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { ChatPage } from '../pages/chat/chat';
import { EnquetePage } from '../pages/enquete/enquete';
import { DocumentProvider } from '../providers/document/document';
import { SponsorsPage } from '../pages/sponsors/sponsors';
import{SponsorsProvider} from '../providers/sponsors/sponsors'
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    MainPage,
    RegisterPage,
    CategoriePage,
    SeoPage,
    InscriptionPage,
    MeetingPage,
    ConcoursPage,
    CandidatPage,
    ExposantPage,
    ParticipantPage,
    JurryPage,
    ReserverpassPage,
    LaureatPage,
    FirstPage,
    WebsitePage,
    EshopPage,
    DigitalPage,
    StartupPage,
    InfluenceurPage,
    MobilePage,
    BjuryPage,
    ReglePage,
    MapPage,
    ChatPage,
    EnquetePage,
    SponsorsPage
  
    
   
  ],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(MyApp), HttpClientModule,
    FileUploadModule, 
    SocketIoModule.forRoot(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    MainPage, 
    EnquetePage,
    RegisterPage,
    InscriptionPage,
    MeetingPage,
    ChatPage,
    ConcoursPage,
    CandidatPage,
    ExposantPage,
    ParticipantPage,
    ReserverpassPage,
    SponsorsPage,
    JurryPage,
    LaureatPage,
    FirstPage,
    CategoriePage,
    WebsitePage,
    EshopPage,
    DigitalPage,
    StartupPage,
   SeoPage,
   InfluenceurPage,
   MobilePage,
   BjuryPage,
    ReglePage,
    MapPage,



  ],
  providers: [
    StatusBar,
    SplashScreen,
   
  


    {provide:  ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,ProvidersRestExpoProvider,
    PartProvider,
    LaureatProvider,
    Geolocation,
    CandidatProvider,
    JuryProvider,
    SpeakerProvider,
    DocumentProvider,
    SponsorsProvider 
  
  ]
})
export class AppModule {}


