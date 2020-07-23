import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromGuards from '../guards';

import { MenuComponent } from './containers/menu.component';

// canActivate: [fromGuards.AuthGuard]
const routes: Routes = [
	{ path: '', component: MenuComponent },
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MenuRoutingModule {}
