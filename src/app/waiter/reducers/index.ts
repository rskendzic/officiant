import * as fromOrders from './order.reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
} from '@ngrx/store';

export interface WaiterState {
	orders: fromOrders.OrdersState
}

export const reducers: ActionReducerMap<WaiterState> = {
	orders: fromOrders.reducer
};


export const getMenuFeatureState = createFeatureSelector<WaiterState>('waiter');



