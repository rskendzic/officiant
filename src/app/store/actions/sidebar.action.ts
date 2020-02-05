import { Action } from '@ngrx/store';

export enum SideBarActionTypes {
	OPEN_SIDEBAR = '[SIDEBAR] Open sidebar',
	CLOSE_SIDEBAR = '[SIDEBAR] Close sidebar',
}

export class OpenSidebar implements Action {
	readonly type = SideBarActionTypes.OPEN_SIDEBAR;
}
export class CloseSidebar implements Action {
	readonly type = SideBarActionTypes.CLOSE_SIDEBAR;
}


export type SidebarActionsUnion = OpenSidebar | CloseSidebar;
