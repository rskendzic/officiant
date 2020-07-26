import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../material.module';

import * as fromComponents from './components';
import { MenuComponent } from './containers/menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import * as fromServices from './service';
import { effects } from './store';
import { reducers } from './store/reducers';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MenuRoutingModule,
		MaterialModule.forChild(),
		StoreModule.forFeature('menu', reducers),
		EffectsModule.forFeature(effects),
	],
	declarations: [MenuComponent, ...fromComponents.components],
	exports: [...fromComponents.components],
	entryComponents: [...fromComponents.dialogs],
	providers: [...fromServices.services],
})
export class MenuModule {}
