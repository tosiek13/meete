import { AppDispatcher } from './../dispatcher/Dispatcher';
import { ActionID } from './ActionID';

class WeeklyCalendarFieldActions {

  public static mouseDown(startTime: number, endTime: number): void {

    AppDispatcher.getInstance().dispatch({
      actionType: ActionID.WEEKLY_CAL__MOUSE_DOWN,
      payload: {
        startTime: startTime,
        endTime: endTime
      }
    } as WeeklyCalendarFieldAction);
  }

  public static mouseUp(startTime: number, endTime: number): void {

    AppDispatcher.getInstance().dispatch({
      actionType: ActionID.WEEKLY_CAL__MOUSE_UP,
      payload: {
        startTime: startTime,
        endTime: endTime
      }
    } as WeeklyCalendarFieldAction );
  }

  public static mouseOver(startTime: number, endTime: number): void {
    AppDispatcher.getInstance().dispatch({
      actionType: ActionID.WEEKLY_CAL__MOUSE_OVER,
      payload: {
        startTime: startTime,
        endTime: endTime
      }
    } as WeeklyCalendarFieldAction );
  }
}

export { WeeklyCalendarFieldActions};