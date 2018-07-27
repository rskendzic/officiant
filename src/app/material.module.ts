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
  MatIconModule
} from '@angular/material';

import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatToolbarModule,
  MatFormFieldModule, MatInputModule, MatDialogModule, MatProgressBarModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressSpinnerModule, MatToolbarModule,
  MatFormFieldModule, MatInputModule, MatDialogModule, MatProgressBarModule, MatIconModule],
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
