import { AppDispatcher } from './../dispatcher/Dispatcher';
import { EventEmitter, ListenerToken } from './EventEmitter';
import { WeeklyCalendarActionID } from './../action/WeeklyCalendarActionID';
import { Dictionary } from 'typescript-collections';
import { DTOEvent } from './../../dom/DTOEvent';
import { WeeklyCalendarHeaderActionID } from './../action/WeeklyCalendarActionID';

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
            this.presentedWeekStartTime = UWeeklyCalendar.getStartTime(new Date());
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
            this.presentedWeekStartTime = UCalendar.getNextDay(new Date(this.presentedWeekStartTime), 7).getTime();
            console.log(new Date(this.presentedWeekStartTime));
      }

      /*getters*/
      getPresentedWeekStartTime(): number{
            return this.presentedWeekStartTime;
      } 
}

function registerToDispatcher() {
      AppDispatcher.getInstance().register(function (action: any) {
            let text: string;
            switch (action.actionType) {
                  case WeeklyCalendarHeaderActionID.NEXT_WEEK:
                        let weeksAmount: number = action.weeksAmount;

                        WeeklyCalendarHeaderStore.getInstance().switchWeek(weeksAmount);
                        WeeklyCalendarHeaderStore.getInstance().emitChange();

                        break;
                  default:
            }
      });
}

AppDispatcher.getInstance().register(function () {

});

export { WeeklyCalendarHeaderStore };