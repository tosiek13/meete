import { AppDispatcher } from './../dispatcher/Dispatcher';
import { ActionID } from './ActionID';

class WeeklyCalendarHeaderActions {
  public static switchWeeks(weeksAmount: number): void {
    AppDispatcher.getInstance().dispatch({
       actionType: ActionID.WEEKLY_CAL__SWITCH_WEEK,
       payload: {
         weeksAmount: weeksAmount
       }
    } as WeeklyCalendarHeaderAction );
  }
}

export { WeeklyCalendarHeaderActions };