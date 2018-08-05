import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { OrderActions, OrderActionTypes } from '../actions/order.actions';

@Injectable()
export class OrderEffects {

  @Effect()
  effect$ = this.actions$.ofType(OrderActionTypes.LoadMenuItems);

  constructor(private actions$: Actions) {}
}
