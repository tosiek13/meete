import { AppDispatcher } from './../dispatcher/Dispatcher';
import { WeeklyCalendarFieldActionID } from './WeeklyCalendarActionID'

class WeeklyCalendarFieldActions {

  public static mouseDown(dayID: number, hourID: number): void {

    AppDispatcher.getInstance().dispatch({
       actionType: WeeklyCalendarFieldActionID.MOUSE_DOWN,
       dayID: dayID,
       hourID: hourID
    });
  }

  public static mouseUp(dayID: number, hourID: number): void {

    AppDispatcher.getInstance().dispatch({
       actionType: WeeklyCalendarFieldActionID.MOUSE_UP,
       dayID: dayID,
       hourID: hourID
    });
  }

  public static mouseOver(dayID: number, hourID: number): void {

    AppDispatcher.getInstance().dispatch({
       actionType: WeeklyCalendarFieldActionID.MOUSE_OVER,
       dayID: dayID,
       hourID: hourID
    });
  }
}

export { WeeklyCalendarFieldActions};