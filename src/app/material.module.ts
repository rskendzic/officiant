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
  MatSnackBarModule,
  MatSelectModule
} from '@angular/material';

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
	MatSnackBarModule,
	MatSelectModule
]

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
