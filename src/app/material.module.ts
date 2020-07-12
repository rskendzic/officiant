import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";

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
	MatSelectModule,
	MatSidenavModule
];

import { NgModule, ModuleWithProviders } from "@angular/core";

@NgModule({
	imports: [...IMPORTS],
	exports: [...IMPORTS]
})
export class MaterialModule {
	static forRoot(): ModuleWithProviders<MaterialModule> {
		return {
			ngModule: MaterialModule,
			providers: []
		};
	}
	static forChild(): ModuleWithProviders<MaterialModule> {
		return {
			ngModule: MaterialModule,
			providers: []
		};
	}
}
