import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromContainers from './containers';

const routes: Routes = [
	{
		path: 'login',
		pathMatch: 'full',
		component: fromContainers.LoginComponent,
	},
	{
		path: '',
		loadChildren: () => import('./containers/shell/shell.module').then((m) => m.ShellModule),
	},
	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
