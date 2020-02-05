import * as fromContainers from './containers'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu' },
  {
    path: 'login',
    pathMatch: 'full',
    canActivate: [],
    component: fromContainers.LoginComponent
  },
  {
		path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule),
	},
	{
		path: 'waiter',
    loadChildren: () => import('./waiter/waiter.module').then(m => m.WaiterModule),
  },
	{ path: '**', redirectTo: 'menu'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
