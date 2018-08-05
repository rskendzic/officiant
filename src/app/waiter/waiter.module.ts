import { WaiterRoutingModule } from './waiter-routing.module';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromOrder from './reducers';
import { WaiterComponent } from './containers/waiter.component';

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
