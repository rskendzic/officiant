import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs';
import { map, switchMap, exhaustMap, catchError, concatMap } from 'rxjs/operators';

import { DrinkActionsTypes, DrinkActionsUnion } from '../actions/drink.actions';
import * as fromDrinkActions from '../actions/drink.actions';

import { DrinkService } from '../../service/drink.service';
import { Drink } from '../../models/Drink';

@Injectable()
export class DrinkEffects {

  constructor(private actions: Actions, private fromService: DrinkService) { }

  @Effect()
  getDrinks: Observable<DrinkActionsUnion> = this.actions.ofType(DrinkActionsTypes.GET_DRINKS)
    .pipe(
      map((action: fromDrinkActions.GetDrinks) => action.payload),
      switchMap(payload => this.fromService.getDrinks(payload)),
      map((drinks: Drink[]) => {
        drinks = drinks.map((drink, id) => {
          drink.id = id;
          return drink;
        });
        return new fromDrinkActions.GetDrinksSuccess(drinks);
      })
    );

  @Effect()
  createDrink: Observable<DrinkActionsUnion> = this.actions.ofType(DrinkActionsTypes.CREATE_DRINK)
    .pipe(
      map((action: fromDrinkActions.CreateDrink) => action.payload),
      concatMap((drink) => this.fromService.createDrink(drink)
        .pipe(
          map((snapshot: any) => new fromDrinkActions.CreateDrinkSuccess(snapshot.data()))
        )
      )
    );

  @Effect()
  deleteDrink: Observable<DrinkActionsUnion> = this.actions.ofType(DrinkActionsTypes.DELETE_DRINK)
    .pipe(
      map((action: fromDrinkActions.DeleteDrink) => action.payload),
      exhaustMap((drink: Drink) => this.fromService.deleteDrink(drink.key)
        .pipe(
          map(() => new fromDrinkActions.DeleteDrinkSuccess(drink))
        )
      )
    );

  @Effect()
  updateDrink: Observable<any> = this.actions.ofType(DrinkActionsTypes.UPDATE_DRINK)
    .pipe(
      map((action: fromDrinkActions.UpdateDrink) => action.payload),
      concatMap((drink: Drink) =>
        this.fromService.updateDrink(drink)
          .pipe(
            map(() => new fromDrinkActions.UpdateDrinkSuccess(drink)),
            catchError(error => error)
          )
      )
    );
}
