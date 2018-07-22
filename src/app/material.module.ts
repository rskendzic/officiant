import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatToolbarModule,
  MatFormFieldModule, MatInputModule, MatDialogModule, MatProgressBarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatToolbarModule,
  MatFormFieldModule, MatInputModule, MatDialogModule, MatProgressBarModule],
})
export class MaterialModule { }
