import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JurryPage } from './jurry';

@NgModule({
  declarations: [
    JurryPage,
  ],
  imports: [
    IonicPageModule.forChild(JurryPage),
  ],
})
export class JurryPageModule {}
