import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZugPage } from './zug.page';

const routes: Routes = [
  {
    path: 'zugauswahl',
    component: ZugPage,
  },

    {
      path: 'zugubersicht',
      loadChildren: () => import('../zugubersicht/zugubersicht.module').then( m => m.ZugubersichtPageModule)
    }, 

  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZugPageRoutingModule {}
