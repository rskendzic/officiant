import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromDrinks from './drink.reducer';

export interface ProductsState {
  drinks: fromDrinks.DrinksState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  drinks: fromDrinks.drinkReducer,
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'drinks'
);
