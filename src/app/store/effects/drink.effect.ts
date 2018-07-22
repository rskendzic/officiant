import { DrinkService } from '../../service/drink.service';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { Observable, from } from 'rxjs';
import { map, switchMap, exhaustMap, catchError } from 'rxjs/operators';

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

  @Effect()
  deleteDrink: Observable<any> = this.actions.ofType(drinkActions.DELETE_DRINK)
    .pipe(
      map((action: drinkActions.DeleteDrink) => action.payload),
      exhaustMap((drinkId: any) =>
        this.fromService.deleteDrink(drinkId).pipe(
          map(() => new drinkActions.DeleteDrinkSuccess(drinkId)),
          catchError(error => error)
        )
      )
    );

  @Effect()
  updateDrink: Observable<any> = this.actions.ofType(drinkActions.UPDATE_DRINK)
    .pipe(
      map((action: drinkActions.UpdateDrink) => action.payload),
      exhaustMap((drink: Drink) =>
        this.fromService.updateDrink(drink).pipe(
          map(() => new drinkActions.UpdateDrinkSuccess(drink)),
          catchError(error => error)
        )
      )
    );
}
