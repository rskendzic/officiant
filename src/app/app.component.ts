import { Drink } from './models/Drink';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as drinkActions from './store/actions/drink.actions';
import * as fromStore from './store';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  drinks$: Observable<Drink[]>;

  getDrinks() {
    this.store.dispatch(new drinkActions.GetDrinks('/drinks'));
  }

  constructor(private store: Store<AppState>) {
    this.drinks$ = this.store.select(fromStore.getAllDrinks);
  }

  ngOnInit() {
    this.getDrinks();
  }

}
