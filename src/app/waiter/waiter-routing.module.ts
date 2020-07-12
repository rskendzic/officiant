import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromContainers from './containers';
import * as fromGuards from './guard/waiter.guard';

//canActivate: [fromGuards.WaiterGuard]
const routes: Routes = [
	{ path: '',
	pathMatch: 'full',
	component: fromContainers.WaiterComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WaiterRoutingModule { }
