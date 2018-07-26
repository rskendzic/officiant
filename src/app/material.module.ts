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

import { NgModule, ModuleWithComponentFactories, ModuleWithProviders } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatToolbarModule,
  MatFormFieldModule, MatInputModule, MatDialogModule, MatProgressBarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatToolbarModule,
  MatFormFieldModule, MatInputModule, MatDialogModule, MatProgressBarModule],
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
