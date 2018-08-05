import { Order } from '../model/Order';
import { Action } from '@ngrx/store';
import { OrderActions, OrderActionTypes } from '../actions/order.actions';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const adapter: EntityAdapter<Order> = createEntityAdapter<Order>({
	selectId: (entity: Order) => entity.id,
	sortComparer: false
});

export interface OrdersState {
	prepared: boolean
}

export const initialState: OrdersState = {
	prepared: false
};

export function reducer(state = initialState, action: OrderActions): OrdersState {
  switch (action.type) {

    case OrderActionTypes.LoadMenuItems:
      return state;


    default:
      return state;
  }
}
