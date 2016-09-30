import { DispatcherInstance } from './../dispatcher/Dispatcher';
import { WeeklyCalendarActionID }  from './WeeklyCalendarActionID';

class WeeklyCalendarActions {
  public  createEvent(startDate: Number, endDate: Number): void {
    DispatcherInstance.dispatch({
      actionType: WeeklyCalendarActionID.CREATE_EVENT,
      startDate: Number,
      endDate: Number
    });
  }

  public removeEvent(id: number): void {
    DispatcherInstance.dispatch({
      actionType: WeeklyCalendarActionID.REMEVE_EVENT,
      id: id
    });
  }

  public editEvent(id: number, description: string): void {
      DispatcherInstance.dispatch({
            actionType: WeeklyCalendarActionID.REMEVE_EVENT,
            id: id
      });
  }
}

let WeeklyCalendarActionsInstance = new WeeklyCalendarActions();
export { WeeklyCalendarActionsInstance, WeeklyCalendarActions };