import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { DefaultRouterStateSerializer, routerReducer, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment'; // Angular CLI environemnt

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromContainers from './containers';
import { RegisterComponent } from './containers/register/register.component';
import * as fromGuards from './guards';
import { MaterialModule } from './material.module';
import { CustomSerializer, effects, reducers } from './store';

export const metaReducers: MetaReducer<any>[] = !environment.production
	? []
	: [];


@NgModule({
	declarations: [
		AppComponent,
		...fromContainers.containers,
		RegisterComponent,
	],
	imports: [
		BrowserModule,
		MaterialModule.forRoot(),
		BrowserAnimationsModule,
		AppRoutingModule,

		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		AngularFirestoreModule,
		AngularFireAuthModule,

		EffectsModule.forRoot(effects),
		FlexLayoutModule,

		ReactiveFormsModule,

		// Connects RouterModule with StoreModule
		StoreRouterConnectingModule.forRoot({ serializer: DefaultRouterStateSerializer,
			stateKey: 'router', // name of reducer key
		}),

		StoreModule.forRoot(reducers, { metaReducers, runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: environment.production, // Restrict extension to log-only mode
		}),
	],
	//, ...fromGuards.guards
	providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
	bootstrap: [AppComponent]
})
export class AppModule { }
