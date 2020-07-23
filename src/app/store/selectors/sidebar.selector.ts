import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromSidebar from '../reducers/sidebar.reducer';

export const getSidebarState = createSelector(
	fromFeature.getSidebarFeatureState,
	(state: fromSidebar.SidebarState) => state
);

export const isSidebarOpen = createSelector(getSidebarState, (state) => state.show);
