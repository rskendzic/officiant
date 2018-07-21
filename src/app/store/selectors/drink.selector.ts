import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromDrinks from '../reducers/drink.reducer';



export const getMenuState = createSelector(
  fromFeature.getMenuState,
  (state: fromFeature.MenuState) => state.drinks
);

export const getDrinksEntities = createSelector(
  getMenuState,
  fromDrinks.getDrinksEntities
);

export const getAllDrinks = createSelector(getDrinksEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});
