import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidatPage } from './candidat';

@NgModule({
  declarations: [
    CandidatPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidatPage),
  ],
})
export class CandidatPageModule {}
