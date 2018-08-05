import { Action } from '@ngrx/store';

export enum OrderActionTypes {
  LoadMenuItems = '[Orders] Load Menu Items by category'
}

export class LoadMenuItems implements Action {
	readonly type = OrderActionTypes.LoadMenuItems;
}

export type OrderActions = LoadMenuItems;
