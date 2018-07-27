import * as fromContainers from './containers'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    pathMatch: 'full',
    canActivate: [],
    component: fromContainers.LoginComponent
  },
  // { path: 'register', pathMatch: 'full', canActivate: [] },
  {
    path: 'menu',
    canActivate: [],
    loadChildren: './menu/menu.module#MenuModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
