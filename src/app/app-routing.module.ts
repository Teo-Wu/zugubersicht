import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ZugPage } from './zug/zug.page';

const routes: Routes = [
  { path: '', component: ZugPage },
  {
    path: 'zugauswahl',
    loadChildren: () => import('./zug/zug.module').then( m => m.ZugPageModule)
  },
  {
    path: 'zugubersicht',
    loadChildren: () => import('./zugubersicht/zugubersicht.module').then( m => m.ZugubersichtPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
