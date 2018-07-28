import * as fromAction from "../actions/notification.action";

export interface NotificationState {
  show: boolean;
}

const initialState: NotificationState = {
  show: false
};

export function notificationReducer
(state: NotificationState = initialState, action: fromAction.NotificationActionsUnion) {
  switch (action.type) {
    case fromAction.NotificationActionTypes.HIDE_SNACKBAR:
      return { ...state, show: false };
    case fromAction.NotificationActionTypes.SHOW_SNACKBAR:
      return { ...state, show: true };
    default:
      return state;
  }
}
