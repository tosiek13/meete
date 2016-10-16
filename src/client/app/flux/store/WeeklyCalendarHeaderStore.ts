import { AppDispatcher } from './../dispatcher/Dispatcher';
import { EventEmitter, ListenerToken } from './EventEmitter';
import { DTOEvent } from './../../dom/DTOEvent';
import { ActionID } from './../action/ActionID'; 


import { UWeeklyCalendar, UCalendar } from './../../utils/calendarUtils';

class WeeklyCalendarHeaderStore extends EventEmitter {
      CHANGE_EVENT: string = "weekly_calendar_header_event";

      static weeklyCalendarHeaderStoreInstance: WeeklyCalendarHeaderStore;
      presentedWeekStartTime: number;

      static getInstance(): WeeklyCalendarHeaderStore{
            if(!this.weeklyCalendarHeaderStoreInstance){
                  this.weeklyCalendarHeaderStoreInstance = new WeeklyCalendarHeaderStore();
            }
            return this.weeklyCalendarHeaderStoreInstance
      }

      constructor() {
            super();
            this.presentedWeekStartTime = UWeeklyCalendar.getStartTime(new Date(), 1);
            registerToDispatcher();
      }

      emitChange() {
            this.emit(this.CHANGE_EVENT);
      }

      addChangeListener(callback: Function): ListenerToken {
            this.addListener(this.CHANGE_EVENT, callback);
            return new ListenerToken(this.CHANGE_EVENT, callback);
      }

      switchWeek(weeksAmount: number) {
            this.presentedWeekStartTime = UCalendar.getNextDay(new Date(this.presentedWeekStartTime), weeksAmount * 7).getTime();
      }

      /*getters*/
      getPresentedWeekStartTime(): number{
            return this.presentedWeekStartTime;
      } 
}

function registerToDispatcher() {
      AppDispatcher.getInstance().register(function (action: WeeklyCalendarHeaderAction) {
            switch (action.actionType) {
                  case ActionID.WEEKLY_CAL__SWITCH_WEEK:
                        WeeklyCalendarHeaderStore.getInstance().switchWeek(action.payload.weeksAmount);
                        WeeklyCalendarHeaderStore.getInstance().emitChange();
                        break;
                  default:
            }
      });
}

export { WeeklyCalendarHeaderStore };