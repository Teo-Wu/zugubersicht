import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZugPageRoutingModule } from './zug-routing.module';

import { ZugPage } from './zug.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZugPageRoutingModule
  ],
  declarations: [ZugPage]
})

export class ZugPageModule {
 

 
}
