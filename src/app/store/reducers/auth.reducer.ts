import { AuthActionTypes, AuthActionsUnion } from "../actions/auth.actions";

export interface AuthState {
  token: string,
  errorMessage: { code: string, message: string},
  authenticated: boolean
}

export const AuthInitialState: AuthState = {
  token: null,
  authenticated: false,
  errorMessage: {code: '', message: ''}
}

 export function authReducer (state = AuthInitialState,action: AuthActionsUnion) {
  switch (action.type) {
    case AuthActionTypes.SIGN_UP_SUCCESS:
        return {
          ...state,
          authenticated: true,
          token: action.payload.uid
        }
    case AuthActionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        errorMessage: action.payload
    }
    case AuthActionTypes.LOG_OUT:
      return {
        ...state,
        authenticated: false,
        token: null
      }
    default:
      return state
  }

 }

export const getErrorMessage = (state: AuthState) => state.errorMessage;
export const getAuthenticated = (state: AuthState) => state.authenticated;
export const getToken = (state: AuthState) => state.token;
