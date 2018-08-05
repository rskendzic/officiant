import { Action } from '@ngrx/store';
import * as firebase from 'firebase'

export interface User {
	uid?: string;
	email: string;
	password: string;
	role?: string;
}

export enum AuthActionTypes {
  SIGN_UP = '[AUTH] Sign up',

  SIGN_UP_SUCCESS = '[FIREBASE] Sign up success',
  SIGN_UP_FAIL = '[FIREBASE] Sign up fail',

  SIGN_IN = '[AUTH] Sign in',
  SIGN_IN_SUCCESS = '[FIREBASE] Sign in success',
  SIGN_IN_FAIL = '[FIREBASE] Sign in fail',

  LOG_OUT = '[AUTH] Log out',
	LOG_OUT_SUCCESS = '[FIREBASE] Log out success',
	LOG_OUT_FAIL = '[FIREBASE] Log out failed',
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SIGN_UP;
	constructor(public payload: User) { }
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
	constructor(public payload: any) { }
}

export class SignInFail implements Action {
	readonly type = AuthActionTypes.SIGN_IN_FAIL;
	constructor(public payload: any) { }
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LOG_OUT;
}

export class LogOutSuccess implements Action {
	readonly type = AuthActionTypes.LOG_OUT_SUCCESS;
}

export class LogOutFail implements Action {
	readonly type = AuthActionTypes.LOG_OUT_FAIL;
	constructor(public payload: any) { }
}


export type AuthActionsUnion =
SignUp
| SignUpSuccess
| SignUpFail
| SignInSuccess
| SignInFail
| SignIn
| LogOut
| LogOutFail
| LogOutSuccess;
