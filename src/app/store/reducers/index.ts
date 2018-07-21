import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromDrinks from './drink.reducer';

export interface MenuState {
  drinks: fromDrinks.DrinksState;
}

export const reducers: ActionReducerMap<MenuState> = {
  drinks: fromDrinks.drinkReducer,
};

export const getMenuFeatureState = createFeatureSelector<MenuState>('menu');
