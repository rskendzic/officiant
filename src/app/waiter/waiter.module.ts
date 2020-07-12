import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../material.module';

import { WaiterComponent } from './containers/waiter.component';
import * as fromOrder from './reducers';
import { WaiterRoutingModule } from './waiter-routing.module';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature('order', fromOrder.reducers),
		FlexLayoutModule,
		MaterialModule.forChild(),
		WaiterRoutingModule
	],
	declarations: [WaiterComponent]
})
export class WaiterModule { }
