import { Action } from '@ngrx/store';
import { MenuActions, MenuActionTypes } from '../actions/menu.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: MenuActions): State {
  switch (action.type) {

    case MenuActionTypes.LoadMenus:
      return state;


    default:
      return state;
  }
}
