import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
} from '@angular/material';

import { NgModule } from '../../node_modules/@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule],
})
export class MaterialModule { }
