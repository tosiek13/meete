import { AppDispatcher } from './../dispatcher/Dispatcher';
import { ActionID } from './ActionID';

class WeeklyCalendarPropsActions {
  public static setNodesPerHour(nodesPerHour: number): void {
    AppDispatcher.getInstance().dispatch({
      actionType: ActionID.WEEKLY_CAL__PROPS_NODES_PER_HOUR,
      payload: {
        weekStartTime: null,
        hoursDayLength: null,
        nodesPerHour: nodesPerHour,
        startDayMilis: null
      }
    } as WeeklyCalendarPropsAction);
  }
}

export { WeeklyCalendarPropsActions };