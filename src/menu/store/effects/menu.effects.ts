import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { MenuActions, MenuActionTypes } from '../actions/menu.actions';

@Injectable()
export class MenuEffects {

  @Effect()
  effect$ = this.actions$.ofType(MenuActionTypes.LoadMenus);

  constructor(private actions$: Actions) {}
}
