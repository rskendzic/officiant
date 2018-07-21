import { AngularFirestoreModule } from 'angularfire2/firestore';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '../../node_modules/@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { reducers } from './store/reducers/';
import { environment } from '../environments/environment'; // Angular CLI environemnt

import { DrinkEffects } from './store';
import { DrinkService } from './service/drink.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,

    EffectsModule.forRoot([DrinkEffects]),
    FlexLayoutModule,
    ReactiveFormsModule,

    StoreModule.forRoot({}),
    StoreModule.forFeature('menu', reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [DrinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
