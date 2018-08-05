import { MenuItem } from '../../models/MenuItem';
import { Action } from '@ngrx/store';

export enum DrinkActionsTypes {
  GET_DRINKS = '[FIREBASE] Get all drinks',
  GET_DRINKS_SUCCESS = '[DRINKS] Get success',
  GET_DRINKS_FAIL = '[DRINKS] Get failed',

  CREATE_DRINK = '[FIREBASE] Create Drink',
  CREATE_DRINK_SUCCESS = '[DRINKS] Create Drink success',

  DELETE_DRINK = '[FIREBASE] DELETE Drink',
  DELETE_DRINK_SUCCESS = '[DRINKS] DELETE Drink success',

  UPDATE_DRINK = '[FIREBASE] UPDATE Drink',
  UPDATE_DRINK_SUCCESS = '[DRINKS] UPDATE Drink success'
}


export class GetDrinks implements Action {
  readonly type = DrinkActionsTypes.GET_DRINKS;
  constructor(public payload: string) { }
}

export class GetDrinksSuccess implements Action {
  readonly type = DrinkActionsTypes.GET_DRINKS_SUCCESS;
  constructor(public payload: MenuItem[]) { }
}

export class GetDrinksFail implements Action {
  readonly type = DrinkActionsTypes.GET_DRINKS_FAIL;
  constructor(public payload: MenuItem[]) { }
}

export class CreateDrink implements Action {
  readonly type = DrinkActionsTypes.CREATE_DRINK;
	constructor(public payload: MenuItem) { }
}

export class CreateDrinkSuccess implements Action {
  readonly type = DrinkActionsTypes.CREATE_DRINK_SUCCESS;
	constructor(public payload: MenuItem) { }
}

export class DeleteDrink implements Action {
  readonly type = DrinkActionsTypes.DELETE_DRINK;
	constructor(public payload: MenuItem) { }
}

export class DeleteDrinkSuccess implements Action {
  readonly type = DrinkActionsTypes.DELETE_DRINK_SUCCESS;
	constructor(public payload: MenuItem) { }
}

export class UpdateDrink implements Action {
  readonly type = DrinkActionsTypes.UPDATE_DRINK;
	constructor(public payload: MenuItem) { }
}

export class UpdateDrinkSuccess implements Action {
  readonly type = DrinkActionsTypes.UPDATE_DRINK_SUCCESS;
	constructor(public payload: MenuItem) { }
}

export type DrinkActionsUnion
  = GetDrinks
  | GetDrinksSuccess
  | GetDrinksFail
  | CreateDrink
  | CreateDrinkSuccess
  | UpdateDrink
  | UpdateDrinkSuccess
  | DeleteDrink
  | DeleteDrinkSuccess;

