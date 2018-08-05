import * as fromGuards from './guard/waiter.guard';
import * as fromContainers from './containers/';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{ path: '', canActivate: [fromGuards.WaiterGuard],
	pathMatch: 'full',
	component: fromContainers.WaiterComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WaiterRoutingModule { }
