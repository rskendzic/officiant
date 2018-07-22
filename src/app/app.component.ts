import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Drink } from './models/Drink';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as drinkActions from './store/actions/drink.actions';
import * as fromStore from './store';
import { switchMap } from '../../node_modules/rxjs/operators';


interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  drinks$: Observable<Drink[]>;
  drinksAreLoading$: Observable<boolean>;
  firebaseUpdated$: Observable<any>;

  drinksForm = this.fb.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    price: ['', Validators.required]
  });

  constructor(private store: Store<AppState>, private fb: FormBuilder, private db: AngularFireDatabase, ) {
    this.drinks$ = this.store.select(fromStore.getAllDrinks);
    this.drinksAreLoading$ = this.store.select(fromStore.areDrinksLoading);
  }

  getDrinks() {
    this.store.dispatch(new drinkActions.GetDrinks('/drinks'));
  }

  onSubmit(formValue) {
    this.store.dispatch(new drinkActions.CreateDrink(formValue));
  }


  ngOnInit() {
    this.getDrinks();
  }

}
