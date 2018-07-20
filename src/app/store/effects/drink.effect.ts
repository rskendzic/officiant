import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs';
import { map, switchMap, delay} from 'rxjs/operators';

import * as drinkActions from '../actions/drink.actions';
import { Drink } from '../../models/Drink';
export type Action = drinkActions.Actions;


@Injectable()
export class DrinkEffects {

  constructor(private actions: Actions, private db: AngularFireDatabase) { }

  @Effect()
  getDrinks: Observable<Action> = this.actions.ofType(drinkActions.GET_DRINKS)
  .pipe(
    map((action: drinkActions.GetDrinks) => action.payload),
    switchMap(payload => this.db.list(payload).valueChanges()),
    map((drinks: any) => {
      drinks = drinks.map((drink, index) => {
        drink.id = drink.$key ? drink.$key  : index;
        return drink;
      });
      return new drinkActions.GetDrinksSuccess(drinks);
    })
  );
}
