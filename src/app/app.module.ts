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
@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    MainPage,
    RegisterPage,
    
    InscriptionPage,
    MeetingPage,
    ConcoursPage,
    CandidatPage,
    ExposantPage,
    ParticipantPage,
    JurryPage,
    ReserverpassPage,
    LaureatPage,
    
   
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(MyApp), HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    MainPage, 
    RegisterPage,
    InscriptionPage,
    MeetingPage,
    ConcoursPage,
    CandidatPage,
    ExposantPage,
    ParticipantPage,
    ReserverpassPage,
    JurryPage,
    LaureatPage,
   
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
   
  


    {provide:  ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,ProvidersRestExpoProvider,
    PartProvider 
  
  ]
})
export class AppModule {}


