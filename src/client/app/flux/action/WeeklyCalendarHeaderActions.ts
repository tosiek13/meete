import { AppDispatcher } from './../dispatcher/Dispatcher';
import { WeeklyCalendarHeaderActionID } from './WeeklyCalendarActionID'

class WeeklyCalendarHeaderActions {
  public static switchWeeks(weeksAmount: number): void {
    AppDispatcher.getInstance().dispatch({
       actionType: WeeklyCalendarHeaderActionID.SWITCH_WEEK,
       payload: {
         weeksAmount: weeksAmount
       }
    } as WeeklyCalendarHeaderAction );
  }
}

export { WeeklyCalendarHeaderActions};