import { Action } from '@ngrx/store';
import { MatSnackBarConfig } from '@angular/material';

export enum NotificationActionTypes {
  SHOW_SNACKBAR = '[NOTIFICATION] Show snackbar to user',
  HIDE_SNACKBAR = '[NOTIFICATION] Hide snackbar',
}

export const NotificationConfigTypes = {
  ERROR_SNACKBAR: { duration: 3000, panelClass: 'error-snackbar'},
  SUCCESS_SNACKBAR: { duration: 3000, panelClass: 'success-snackbar'},
  INFO_SNACKBAR: { duration: 3000, panelClass: 'info-snackbar'},
}

export class ShowSnackbar implements Action {
  readonly type = NotificationActionTypes.SHOW_SNACKBAR;
  constructor(public payload: {
    message: string,
    action?: string,
    config?: MatSnackBarConfig
  }) { }
}
export class HideSnackbar implements Action {
  readonly type = NotificationActionTypes.HIDE_SNACKBAR;
}


export type NotificationActionsUnion = ShowSnackbar | HideSnackbar;
