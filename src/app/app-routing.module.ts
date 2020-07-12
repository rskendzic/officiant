import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromContainers from './containers';

const routes: Routes = [
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
	{ path: '', pathMatch: 'full', redirectTo: 'menu' },
	{ path: '**', redirectTo: 'menu'},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
