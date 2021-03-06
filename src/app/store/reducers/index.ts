import * as fromMenu from '../../menu/store/reducers';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Params,
} from '@angular/router';
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import * as fromAuth from './auth.reducer';
import * as fromNotification from './notification.reducer';
import * as fromSidebar from './sidebar.reducer';
import { Injectable } from "@angular/core";

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface AppState {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
  auth: fromAuth.AuthState;
	notifications: fromNotification.NotificationState;
	sidebar: fromSidebar.SidebarState;
}

export const reducers: ActionReducerMap<AppState> = {
  routerReducer: fromRouter.routerReducer,
  auth: fromAuth.authReducer,
	notifications: fromNotification.notificationReducer,
	sidebar: fromSidebar.sidebarReducer,
};

export const getAuthFeatureState = createFeatureSelector<fromAuth.AuthState>('auth');
export const getNotificationFeatureState = createFeatureSelector<fromNotification.NotificationState>('notification');
export const getSidebarFeatureState = createFeatureSelector<fromSidebar.SidebarState>('sidebar');

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
  >('routerReducer');

@Injectable()
export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}
