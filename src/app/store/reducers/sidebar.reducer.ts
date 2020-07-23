import * as fromAction from '../actions/sidebar.action';

export interface SidebarState {
	show: boolean;
}

const initialState: SidebarState = {
	show: false,
};

export function sidebarReducer(state: SidebarState = initialState, action: fromAction.SidebarActionsUnion) {
	switch (action.type) {
		case fromAction.SideBarActionTypes.OPEN_SIDEBAR:
			return { ...state, show: true };
		case fromAction.SideBarActionTypes.CLOSE_SIDEBAR:
			return { ...state, show: false };
		default:
			return state;
	}
}
