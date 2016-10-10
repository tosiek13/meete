import { AppDispatcher } from './../dispatcher/Dispatcher';
import { EventEmitter, ListenerToken } from './EventEmitter';
import { WeeklyCalendarFieldActionID } from './../action/WeeklyCalendarActionID';
import { Dictionary } from 'typescript-collections';
import { DTOEvent } from './../../dom/DTOEvent';

import { UWeeklyCalendar, UCalendar } from './../../utils/calendarUtils';

class WeeklyCalendarFieldsStore extends EventEmitter {
      CHANGE_EVENT: string = "weekly_calendar_field_event";

      static weeklyCalendarFieldStoreInstance: WeeklyCalendarFieldsStore;
      presentedWeekStartTime: number;

      static getInstance(): WeeklyCalendarFieldsStore {
            if (!this.weeklyCalendarFieldStoreInstance) {
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

      mouseDown(dayPosition: number, hourPosition: number) {
            console.log("Down");
      }
      mouseUp(dayPosition: number, hourPosition: number) {
            console.log("Up");
      }
      mouseOver(dayPosition: number, hourPosition: number) {
            console.log("Over");
      }
}

function registerToDispatcher() {
      AppDispatcher.getInstance().register(function (action: WeeklyCalendarFieldAction) {
            switch (action.actionType) {
                  case WeeklyCalendarFieldActionID.MOUSE_DOWN:
                        WeeklyCalendarFieldsStore.getInstance().mouseDown(action.payload.dayID, action.payload.hourID);
                        WeeklyCalendarFieldsStore.getInstance().emitChange();
                        break;
                  case WeeklyCalendarFieldActionID.MOUSE_UP:
                        WeeklyCalendarFieldsStore.getInstance().mouseUp(action.payload.dayID, action.payload.hourID);
                        WeeklyCalendarFieldsStore.getInstance().emitChange();
                        break;
                  case WeeklyCalendarFieldActionID.MOUSE_OVER:
                        WeeklyCalendarFieldsStore.getInstance().mouseOver(action.payload.dayID, action.payload.hourID);
                        WeeklyCalendarFieldsStore.getInstance().emitChange();
                        break;
                  default:
            }
      });
}

export { WeeklyCalendarFieldsStore };