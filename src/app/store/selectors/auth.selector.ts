import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';



export const getAuthState = createSelector(
  fromFeature.getAuthFeatureState,
  (state: fromAuth.AuthState) => state
);

export const getErrorMessage = createSelector(
  getAuthState,
  fromAuth.getErrorMessage
);

export const getAuthenticated = createSelector(
  getAuthState,
  fromAuth.getAuthenticated
);

export const getToken = createSelector(
  getAuthState,
  fromAuth.getToken
);
