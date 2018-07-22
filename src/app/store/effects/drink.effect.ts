import { DrinkService } from './../../service/drink.service';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { Observable, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import * as drinkActions from '../actions/drink.actions';
import { Drink } from '../../models/Drink';
export type Action = drinkActions.Actions;


@Injectable()
export class DrinkEffects {

  constructor(private actions: Actions, private db: AngularFirestore, private fromService: DrinkService) { }

  @Effect()
  getDrinks: Observable<Action> = this.actions.ofType(drinkActions.GET_DRINKS)
  .pipe(
    map((action: drinkActions.GetDrinks) => action.payload),
    switchMap(payload => this.fromService.getDrinks(payload)),
    map((drinks: any) => {
      drinks = drinks.map((drink, index) => {
        drink.index = index;
        return drink;
      });
      return new drinkActions.GetDrinksSuccess(drinks);
    })
  );

  @Effect()
  createDrink: Observable<any> = this.actions.ofType(drinkActions.CREATE_DRINK)
  .pipe(
    map((action: drinkActions.CreateDrink) => action.payload),
    map((drink) => this.fromService.createDrink(drink)),
    switchMap((drinkDocument: AngularFirestoreDocument) => from(drinkDocument.ref.get())),
    map((snapshot: any) =>  {
      const drink: Drink = snapshot.data();
      return new drinkActions.CreateDrinkSuccess(drink);
    })
    );
}
