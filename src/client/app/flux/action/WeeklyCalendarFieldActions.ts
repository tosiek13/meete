import { AppDispatcher } from './../dispatcher/Dispatcher';
import { ActionID } from './ActionID';

class WeeklyCalendarFieldActions {

  public static mouseDown(dayID: number, hourID: number): void {

    AppDispatcher.getInstance().dispatch({
      actionType: ActionID.WEEKLY_CAL__MOUSE_DOWN,
      payload: {
        dayID: dayID,
        hourID: hourID
      }
    } as WeeklyCalendarFieldAction);
  }

  public static mouseUp(dayID: number, hourID: number): void {

    AppDispatcher.getInstance().dispatch({
      actionType: ActionID.WEEKLY_CAL__MOUSE_UP,
      payload: {
        dayID: dayID,
        hourID: hourID
      }
    } as WeeklyCalendarFieldAction );
  }

  public static mouseOver(dayID: number, hourID: number): void {
    AppDispatcher.getInstance().dispatch({
      actionType: ActionID.WEEKLY_CAL__MOUSE_OVER,
      payload: {
        dayID: dayID,
        hourID: hourID
      }
    } as WeeklyCalendarFieldAction );
  }
}

export { WeeklyCalendarFieldActions};