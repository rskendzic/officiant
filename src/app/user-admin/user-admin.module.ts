import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserAdminComponent } from './user-admin.component';
import { UserAdminService } from './user-admin.service';

const routes: Routes = [
	{ path: '', component: UserAdminComponent },
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	declarations: [UserAdminComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
	providers: [UserAdminService],
})
export class UserAdminModule {}
