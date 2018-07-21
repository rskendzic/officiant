import { CREATE_DRINK } from './../actions/drink.actions';
import { Drink } from './../../models/Drink';
import * as DrinkActions from '../actions/drink.actions';

export type Action = DrinkActions.Actions;

export interface DrinksState {
  entities: { [id: number]: Drink };
  loaded: boolean;
  loading: boolean;
}

export const initialState: DrinksState = {
  entities: {},
  loaded: false,
  loading: false,
};

/// Reducer function
export function drinkReducer(state = initialState, action: Action) {

  switch (action.type) {

    case DrinkActions.GET_DRINKS:
      return { ...state, loading: true };

    case DrinkActions.GET_DRINKS_SUCCESS:
      const drinks = action.payload;

      const entities = drinks.reduce(
        (drinkEntities: { [id: number]: Drink }, drink: Drink) => {
          return {
            ...drinkEntities,
            [drink.id]: drink,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };

    case DrinkActions.GET_DRINKS_FAIL:
      return { ...state, ...action.payload, loading: false, error: true };

    case DrinkActions.CREATE_DRINK_SUCCESS: {
      const drink = action.payload;
      const drinkEntities = {
        ...state.entities,
        [drink.id]: drink,
      };

      return {
        ...state,
        entities: drinkEntities,
      };
    }

    default:
      return state;

  }
}
export const getDrinksEntities = (state: DrinksState) => state.entities;
export const getDrinksLoading = (state: DrinksState) => state.loading;
export const getDrinksLoaded = (state: DrinksState) => state.loaded;
