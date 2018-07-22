import { CREATE_DRINK, DELETE_DRINK_SUCCESS } from './../actions/drink.actions';
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
    case DrinkActions.CREATE_DRINK:
    case DrinkActions.DELETE_DRINK:
      return { ...state, loading: true };

    case DrinkActions.GET_DRINKS_SUCCESS:
      const drinks = action.payload;

      const entities = drinks.reduce(
        (drinkEntities: { [index: string]: Drink }, drink: Drink) => {
          return {
            ...drinkEntities,
            [drink.index]: drink,
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
      const index = Object.keys(state.entities).length;
      const drinkEntities = {
        ...state.entities,
        [index]: drink,
      };

      return {
        ...state,
        entities: drinkEntities,
        loading: false
      };
    }

    case DrinkActions.DELETE_DRINK_SUCCESS: {
      const deletedDrinkId = action.payload;
      const [{index}] = Object.values(state.entities).filter(drink => drink.id === deletedDrinkId);
      const { [index]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities,
        loading: false
      };
    }

    default:
      return state;

  }
}
export const getDrinksEntities = (state: DrinksState) => state.entities;
export const getDrinksLoading = (state: DrinksState) => state.loading;
export const getDrinksLoaded = (state: DrinksState) => state.loaded;
