import { AppDispatcher } from './../dispatcher/Dispatcher';
import { WeeklyCalendarFieldActionID } from './WeeklyCalendarActionID'

export interface WEEKLY_CALENDAR_FIELD_ACTION { actionType: number; payload: { dayID: number, hourID: number }; }

class WeeklyCalendarFieldActions {

  public static mouseDown(dayID: number, hourID: number): void {

    AppDispatcher.getInstance().dispatch({
      actionType: WeeklyCalendarFieldActionID.MOUSE_DOWN,
      payload: {
        dayID: dayID,
        hourID: hourID
      }
    });
  }

  public static mouseUp(dayID: number, hourID: number): void {

    AppDispatcher.getInstance().dispatch({
      actionType: WeeklyCalendarFieldActionID.MOUSE_UP,
      payload: {
        dayID: dayID,
        hourID: hourID
      }
    });
  }

  public static mouseOver(dayID: number, hourID: number): void {

    AppDispatcher.getInstance().dispatch({
      actionType: WeeklyCalendarFieldActionID.MOUSE_OVER,
      payload: {
        dayID: dayID,
        hourID: hourID
      }
    });
  }
}

export { WeeklyCalendarFieldActions};