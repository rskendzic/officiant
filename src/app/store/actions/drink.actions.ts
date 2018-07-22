import { Drink } from '../../models/Drink';
import { Action } from '@ngrx/store';

export const GET_DRINKS = '[DRINKS] Get all drinks';
export const GET_DRINKS_SUCCESS = '[DRINKS] Get success';
export const GET_DRINKS_FAIL = '[DRINKS] Get failed';

export const CREATE_DRINK = '[DRINKS] Create Drink';
export const CREATE_DRINK_SUCCESS = '[DRINKS] Create Drink success';

export const DELETE_DRINK = '[DRINKS] DELETE Drink';
export const DELETE_DRINK_SUCCESS = '[DRINKS] DELETE Drink success';

export const VOTE_UPDATE = 'Post Vote';
export const VOTE_SUCCESS = 'Post Vote success';
export const VOTE_FAIL = 'Post Vote fail';


export class GetDrinks implements Action {
  readonly type = GET_DRINKS;
  constructor(public payload: string) { }
}

export class GetDrinksSuccess implements Action {
  readonly type = GET_DRINKS_SUCCESS;
  constructor(public payload: Drink[]) { }
}

export class GetDrinksFail implements Action {
  readonly type = GET_DRINKS_FAIL;
  constructor(public payload: Drink[]) { }
}

export class CreateDrink implements Action {
  readonly type = CREATE_DRINK;
  constructor(public payload: Drink) { }
}

export class CreateDrinkSuccess implements Action {
  readonly type = CREATE_DRINK_SUCCESS;
  constructor(public payload: Drink) { }
}

export class DeleteDrink implements Action {
  readonly type = DELETE_DRINK;
  constructor(public payload: string) { }
}

export class DeleteDrinkSuccess implements Action {
  readonly type = DELETE_DRINK_SUCCESS;
  constructor(public payload: string) { }
}

export type Actions
  = GetDrinks
  | GetDrinksSuccess
  | GetDrinksFail
  | CreateDrink
  | CreateDrinkSuccess
  | DeleteDrink
  | DeleteDrinkSuccess;

