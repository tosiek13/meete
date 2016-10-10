import { AppDispatcher } from './../dispatcher/Dispatcher';
import { EventEmitter, ListenerToken } from './EventEmitter';
import { WeeklyCalendarFieldActionID } from './../action/WeeklyCalendarActionID';
import { Dictionary } from 'typescript-collections';
import { DTOEvent } from './../../dom/DTOEvent';

import { UWeeklyCalendar, UCalendar } from './../../utils/calendarUtils';

class WeeklyCalendarFieldsStore extends EventEmitter {
      CHANGE_EVENT: string = "weekly_calendar_header_event";

      static weeklyCalendarFieldStoreInstance: WeeklyCalendarFieldsStore;
      presentedWeekStartTime: number;

      static getInstance(): WeeklyCalendarFieldsStore{
            if(!this.weeklyCalendarFieldStoreInstance){
                  this.weeklyCalendarFieldStoreInstance = new WeeklyCalendarFieldsStore();
            }
            return this.weeklyCalendarFieldStoreInstance
      }

      constructor() {
            super();
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
      AppDispatcher.getInstance().register(function (action: WeeklyCalendarFieldAction) {
            switch (action.actionType) {
                  /*let hourID = action.payload.hourID;
                  let letDayID = action.payload.dayID;
                  case WeeklyCalendarFieldActionID.MOUSE_DOWN:
                        WeeklyCalendarFieldsStore.getInstance().switchWeek(action.presentedWeekStartTime);
                        WeeklyCalendarFieldsStore.getInstance().emitChange();
                        break;*/
                  default:
            }
      });
}

export { WeeklyCalendarFieldsStore };