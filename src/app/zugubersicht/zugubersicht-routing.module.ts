import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZugubersichtPage } from './zugubersicht.page';
import { ZugPage } from '/Users/teo_wu/Desktop/swp/wagenlisten/src/app/zug/zug.page';

const routes: Routes = [
  {
    path: '',
    component: ZugubersichtPage
  },

  {
    path: 'zugauswahl',
    component:ZugPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZugubersichtPageRoutingModule {}
