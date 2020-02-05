import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuRoutingModule } from './menu-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './containers/menu.component';

import { reducers } from './store/reducers';
import { effects } from './store';
import * as fromServices from './service';

import { StoreModule } from '@ngrx/store';

import * as fromComponents from './components';

import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MenuRoutingModule,
    FlexLayoutModule,
    MaterialModule.forChild(),
    StoreModule.forFeature('menu', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [
    MenuComponent,
    ...fromComponents.components
  ],
  exports: [...fromComponents.components],
  entryComponents: [
    ...fromComponents.dialogs
  ],
  providers: [
    ...fromServices.services
  ]
})
export class MenuModule { }
