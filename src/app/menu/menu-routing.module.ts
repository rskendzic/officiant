import * as fromGuards from '../guards';
import { MenuComponent } from './containers/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{ path: '', canActivate: [fromGuards.AuthGuard], pathMatch: 'full', component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
