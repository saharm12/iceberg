import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EshopPage } from './eshop';

@NgModule({
  declarations: [
    EshopPage,
  ],
  imports: [
    IonicPageModule.forChild(EshopPage),
  ],
})
export class EshopPageModule {}
