import { WeeklyCalendarDispatcher } from './../dispatcher/WeeklyCalendarDispatcher';
import { EventEmitter, ListenerToken } from './EventEmitter';
import { DTOEvent } from './../../dom/DTOEvent';
import { ActionID } from './../action/ActionID';
import { EventsStore } from './../../flux/store/EventsStore'; 
import { EventActions } from './../../flux/action/EventActions';

import { UWeeklyCalendar, UCalendar } from './../../utils/calendarUtils';

class WeeklyCalendarFieldsStore extends EventEmitter {
      CHANGE_EVENT: string = "weekly_calendar_field_event";

      static weeklyCalendarFieldStoreInstance: WeeklyCalendarFieldsStore;
      presentedWeekStartTime: number;
      eventStartTime: number;

      static getInstance(): WeeklyCalendarFieldsStore {
            if (!this.weeklyCalendarFieldStoreInstance) {
                  this.weeklyCalendarFieldStoreInstance = new WeeklyCalendarFieldsStore();
            }
            return this.weeklyCalendarFieldStoreInstance
      }

      constructor() {
            super();
            registerToDispatcher();
            this.mouseDown = this.mouseDown.bind(this);
            this.mouseOver = this.mouseOver.bind(this);
            this.mouseUp = this.mouseUp.bind(this);
      }

      emitChange() {
            this.emit(this.CHANGE_EVENT);
      }

      addChangeListener(callback: Function): ListenerToken {
            this.addListener(this.CHANGE_EVENT, callback);
            return new ListenerToken(this.CHANGE_EVENT, callback);
      }

      mouseDown(startTime: number, endTime: number) {
            this.eventStartTime = startTime;
      }
      mouseUp(startTime: number, endTime: number) {
            if(this.eventStartTime){
                console.log("Create event " + new Date(this.eventStartTime) + ", " + new Date(endTime));
                EventActions.createEvent(new DTOEvent(null, this.eventStartTime, endTime));
            }
      }
      mouseOver(startTime: number, endTime: number) {
      }
}

function registerToDispatcher() {
      WeeklyCalendarDispatcher.getInstance().register(function (action: WeeklyCalendarFieldAction) {
            switch (action.actionType) {
                  case ActionID.WEEKLY_CAL__MOUSE_DOWN:
                        WeeklyCalendarFieldsStore.getInstance().mouseDown(action.payload.startTime, action.payload.endTime);
                        WeeklyCalendarFieldsStore.getInstance().emitChange();
                        break;
                  case ActionID.WEEKLY_CAL__MOUSE_UP:
                        WeeklyCalendarFieldsStore.getInstance().mouseUp(action.payload.startTime, action.payload.endTime);
                        WeeklyCalendarFieldsStore.getInstance().emitChange();
                        break;
                  case ActionID.WEEKLY_CAL__MOUSE_OVER:
                        WeeklyCalendarFieldsStore.getInstance().mouseOver(action.payload.startTime, action.payload.endTime);
                        WeeklyCalendarFieldsStore.getInstance().emitChange();
                        break;
                  default:
            }
      });
}

export { WeeklyCalendarFieldsStore };