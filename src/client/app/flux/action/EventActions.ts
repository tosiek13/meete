import { AppDispatcher } from './../dispatcher/Dispatcher';
import { ActionID } from './ActionID';

class EventActions {

  public static createEvent(event: DTOEvent): void {

    AppDispatcher.getInstance().dispatch({
      actionType: ActionID.EVENT_ACTION_CREATE,
      payload: {
        event: event
      }
    } as EventAction);
  }

  
}

export { EventActions };