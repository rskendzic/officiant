import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { Observable } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, switchMap } from 'rxjs/operators';

import { MenuItem } from '../../models/MenuItem';
import { DrinkService } from '../../service/drink.service';
import { DrinkActionsTypes, DrinkActionsUnion } from '../actions/drink.actions';
import * as fromDrinkActions from '../actions/drink.actions';

@Injectable()
export class DrinkEffects {

	constructor(private actions: Actions, private fromService: DrinkService) { }

	@Effect()
	getDrinks: Observable<DrinkActionsUnion> = this.actions
		.pipe(
		ofType(DrinkActionsTypes.GET_DRINKS),
			map((action: fromDrinkActions.GetDrinks) => action.payload),
			switchMap(payload => this.fromService.getDrinks(payload)),
			map((drinks: MenuItem[]) => {
				drinks = drinks.map((drink, id) => {
					drink.id = id;
					return drink;
				});
				return new fromDrinkActions.GetDrinksSuccess(drinks);
			})
		);

	@Effect()
	createDrink: Observable<DrinkActionsUnion> = this.actions.
		pipe(
	ofType(DrinkActionsTypes.CREATE_DRINK),
			map((action: fromDrinkActions.CreateDrink) => action.payload),
			concatMap((drink) => this.fromService.createDrink(drink)
				.pipe(
					map((snapshot: any) => new fromDrinkActions.CreateDrinkSuccess(snapshot.data()))
				)
			)
		);

	@Effect()
	deleteDrink: Observable<DrinkActionsUnion> = this.actions
		.pipe(
		ofType(DrinkActionsTypes.DELETE_DRINK),
			map((action: fromDrinkActions.DeleteDrink) => action.payload),
			exhaustMap((drink: MenuItem) => this.fromService.deleteDrink(drink.key)
				.pipe(
					map(() => new fromDrinkActions.DeleteDrinkSuccess(drink))
				)
			)
		);

	@Effect()
	updateDrink: Observable<any> = this.actions
		.pipe(
	ofType(DrinkActionsTypes.UPDATE_DRINK),
			map((action: fromDrinkActions.UpdateDrink) => action.payload),
			concatMap((drink: MenuItem) =>
				this.fromService.updateDrink(drink)
					.pipe(
						map(() => new fromDrinkActions.UpdateDrinkSuccess(drink)),
						catchError(error => error)
					)
			)
		);
}
