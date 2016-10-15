import { AppDispatcher } from './../dispatcher/Dispatcher';
import { EventEmitter, ListenerToken } from './EventEmitter';
import { DTOEvent } from './../../dom/DTOEvent';
import { ActionID } from './../action/ActionID'; 

import { UWeeklyCalendar, UCalendar } from './../../utils/calendarUtils';

class EventsStore extends EventEmitter {
      CHANGE_EVENT: string = "events_modyfication";

      static eventsStoreInstance: EventsStore;
      presentedWeekStartTime: number;

      static getInstance(): EventsStore {
            if (!this.eventsStoreInstance) {
                  this.eventsStoreInstance = new EventsStore();
            }
            return this.eventsStoreInstance
      }

      constructor() {
            super();
            registerToDispatcher();
            this.getUserEvents = this.getUserEvents.bind(this);
      }

      /**/
      getUserEvents(dayTime: number): DTOEvent[]{

            return [ 
                  new DTOEvent(1, dayTime, dayTime + UCalendar.getMilisecondsInHour(2))
                  ]
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
      /*AppDispatcher.getInstance().register(function (action: WeeklyCalendarFieldAction) {
            switch (action.actionType) {
                  case ActionID.WEEKLY_CAL__MOUSE_DOWN:
                        EventsStore.getInstance().mouseDown(action.payload.startTime, action.payload.endTime);
                        EventsStore.getInstance().emitChange();
                        break;
                  case ActionID.WEEKLY_CAL__MOUSE_UP:
                        EventsStore.getInstance().mouseUp(action.payload.startTime, action.payload.endTime);
                        EventsStore.getInstance().emitChange();
                        break;
                  case ActionID.WEEKLY_CAL__MOUSE_OVER:
                        EventsStore.getInstance().mouseOver(action.payload.startTime, action.payload.endTime);
                        EventsStore.getInstance().emitChange();
                        break;
                  default:
            }
      });*/
}

export { EventsStore };