import { Drink } from '../../models/Drink';
import { DrinkActionsTypes, DrinkActionsUnion } from '../actions/drink.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const adapter: EntityAdapter<Drink> = createEntityAdapter<Drink>({
    selectId: (entity: Drink) => entity.id,
    sortComparer: false
  });

export interface DrinksState extends EntityState<Drink> {
  loaded: boolean;
  loading: boolean;
}

export const initialState: DrinksState = adapter.getInitialState({
  loaded: false, // if entities are not loading, and they are not loaded -> it's an error
  loading: false,
});

/// Reducer function
export function drinkReducer(state = initialState, action: DrinkActionsUnion) {

  switch (action.type) {

    case DrinkActionsTypes.GET_DRINKS:
    case DrinkActionsTypes.CREATE_DRINK:
    case DrinkActionsTypes.DELETE_DRINK:
    case DrinkActionsTypes.UPDATE_DRINK:
      return { ...state, loading: true };

    case DrinkActionsTypes.GET_DRINKS_SUCCESS:
      return adapter.addAll(action.payload, {...state, loading: false, loaded: true});

    case DrinkActionsTypes.GET_DRINKS_FAIL:
      return { ...state, ...action.payload, loading: false, loaded: false };

    case DrinkActionsTypes.CREATE_DRINK_SUCCESS: {
      const id = Object.keys(state.entities).length;
      return adapter.addOne({...action.payload, id}, { ...state, loading: false, loaded: true});
    }

    case DrinkActionsTypes.UPDATE_DRINK_SUCCESS: {
      return adapter.upsertOne(action.payload, { ...state, loading: false, loaded: true});
    }

    case DrinkActionsTypes.DELETE_DRINK_SUCCESS: {
      return adapter.removeOne(action.payload.id, { ...state, loading: false, loaded: true});
    }

    default:
      return state;

  }
}

// get the selectors - this is possible but i don't see the benefit.
const { selectIds, selectEntities, selectAll, selectTotal,  } = adapter.getSelectors();

export const getDrinksEntities = (state: DrinksState) => state.entities;
export const getDrinksLoading = (state: DrinksState) => state.loading;
export const getDrinksLoaded = (state: DrinksState) => state.loaded;
