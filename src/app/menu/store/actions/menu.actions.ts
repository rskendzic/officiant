import { Action } from '@ngrx/store';

export enum MenuActionTypes {
  LoadMenus = '[Menu] Load Menus'
}

export class LoadMenus implements Action {
  readonly type = MenuActionTypes.LoadMenus;
}

export type MenuActions = LoadMenus;
