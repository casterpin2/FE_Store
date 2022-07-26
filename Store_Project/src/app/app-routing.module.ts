import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@modules/store/store.module').then(m => m.StoreModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('@modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
