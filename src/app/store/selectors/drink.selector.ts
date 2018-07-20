import { Drink } from './../../models/Drink';
import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromDrinks from '../reducers/drink.reducer';



export const getPizzaState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.drinks
);

export const getDrinksEntities = createSelector(
  getPizzaState,
  fromDrinks.getDrinksEntities
);

export const getAllDrinks = createSelector(getDrinksEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});
