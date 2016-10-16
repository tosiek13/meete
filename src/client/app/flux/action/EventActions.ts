import { AppDispatcher } from './../dispatcher/Dispatcher';
import { ActionID } from './ActionID';

class EventActions {

  public static mouseDown (event: DTOEvent): void {

    AppDispatcher.getInstance().dispatch({
      actionType: ActionID.EVENT_ACTION_MOUSE_DOWN,
      payload: {
        event: event
      }
    } as EventAction);
  }

  
}

export { EventActions };