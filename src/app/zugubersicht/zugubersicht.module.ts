import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZugubersichtPageRoutingModule } from './zugubersicht-routing.module';

import { ZugubersichtPage } from './zugubersicht.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZugubersichtPageRoutingModule
  ],
  declarations: [ZugubersichtPage]
})
export class ZugubersichtPageModule {}
