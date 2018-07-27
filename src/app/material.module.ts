const IMPORTS = [
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatIconModule,
  MatSnackBarModule
]

import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatIconModule,
  MatSnackBarModule
} from '@angular/material';

import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  imports: [...IMPORTS],
  exports: [...IMPORTS],
})
export class MaterialModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MaterialModule,
      providers: []
    };
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: MaterialModule,
      providers: []
    };
  }
  }
