import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  SIGN_UP = '[AUTH] Sign up',

  SIGN_UP_SUCCESS = '[FIREBASE] Sign up success',
  SIGN_UP_FAIL = '[FIREBASE] Sign up fail',

  SIGN_IN = '[AUTH] Sign in',
  SIGN_IN_SUCCESS = '[FIREBASE] Sign in success',

  LOG_OUT = '[AUTH] Log out',
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SIGN_UP;
  constructor(public payload: {email:string, password:string}) { }
}
export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SIGN_UP_SUCCESS;
  constructor(public payload: any) { }
}

export class SignUpFail implements Action {
  readonly type = AuthActionTypes.SIGN_UP_FAIL;
  constructor(public payload: any) { }
}

export class SignIn implements Action {
  readonly type = AuthActionTypes.SIGN_IN;
  constructor(public payload: {email:string, password:string}) { }
}


export class SignInSuccess implements Action {
  readonly type = AuthActionTypes.SIGN_IN_SUCCESS;
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LOG_OUT;
  constructor(public payload: string) { }
}

export type AuthActionsUnion =
SignUp
| SignUpSuccess
| SignUpFail
| SignIn
| LogOut;
