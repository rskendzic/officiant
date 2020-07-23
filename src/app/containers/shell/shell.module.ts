import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';

import { HeaderComponent } from './components/header/header.component';
import { ShellComponent } from './shell.component';

const routes = [
	{
		path: '',
		component: ShellComponent,
		children: [
			{
				path: 'menu',
				loadChildren: () => import('../../menu/menu.module').then((m) => m.MenuModule),
			},
			{
				path: 'waiter',
				loadChildren: () => import('../../waiter/waiter.module').then((m) => m.WaiterModule),
			},
			{
				path: '**',
				redirectTo: 'menu',
			},
		],
	},
];

@NgModule({
	declarations: [ShellComponent, HeaderComponent],
	imports: [CommonModule, RouterModule.forChild(routes), MaterialModule.forChild()],
	exports: [],
})
export class ShellModule {}
