import { AppDispatcher } from './../dispatcher/Dispatcher';
import { ActionID } from './ActionID';

class AuthenticationActions {

  public static logIn(username: string, password: string): void {
    AppDispatcher.getInstance().dispatch({
      actionType: ActionID.AUTHENTICATION_LOG_IN,
      payload: {
        username: username,
        password: password
      }
    } as AuthenticationAction);
  }

  public static logOut(): void {
    AppDispatcher.getInstance().dispatch({
      actionType: ActionID.AUTHENTICATION_LOG_OUT,
      payload: {
        username: null,
        password: null
      }
    } as AuthenticationAction);
  }

  public static authenticated(): void {
    AppDispatcher.getInstance().dispatch({
      actionType: ActionID.AUTHENTICATION_SUCCEED,
      payload: {
        username: null,
        password: null
      }
    } as AuthenticationAction);
  }

  public static authenticationFailed(): void {
    AppDispatcher.getInstance().dispatch({
      actionType: ActionID.AUTHENTICATION_FAILED,
      payload: {
        username: null,
        password: null
      }
    } as AuthenticationAction);
  }
  
}

export { AuthenticationActions };