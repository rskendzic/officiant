import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule
} from '@angular/material';
import { NgModule } from '../../node_modules/@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule],
})
export class MaterialModule { }
