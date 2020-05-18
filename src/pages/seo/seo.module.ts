import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeoPage } from './seo';

@NgModule({
  declarations: [
    SeoPage,
  ],
  imports: [
    IonicPageModule.forChild(SeoPage),
  ],
})
export class SeoPageModule {}
