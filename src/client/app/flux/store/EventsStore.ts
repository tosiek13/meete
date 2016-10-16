import { AppDispatcher } from './../dispatcher/Dispatcher';
import { EventEmitter, ListenerToken } from './EventEmitter';
import { DTOEvent } from './../../dom/DTOEvent';
import { ActionID } from './../action/ActionID';

import { UWeeklyCalendar, UCalendar } from './../../utils/calendarUtils';

class EventsStore extends EventEmitter {
      CHANGE_EVENT: string = "events_modyfication";

      eventsByDate: { [dayInMonth: number]: DTOEvent[]; } = {
      }

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
            this.createEvent = this.createEvent.bind(this);
      }

      /*returns events for specified by dayTime day*/
      getUserEvents(date: Date): DTOEvent[] {
            let events: DTOEvent[] = this.eventsByDate[date.getDate()];
            if (!events) {
                  events = [];
            }
            return events;
      }

      createEvent(event: DTOEvent): void {
            event.id = new Date().getTime();
            let day = new Date(event.startTime).getDate();
            let events: DTOEvent[] = this.eventsByDate[day];
            if (!events) {
                  events = [];
            }
            events.push(event);
            this.eventsByDate[day] = events;
      }

      emitChange() {
            console.log("Emit")
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
      AppDispatcher.getInstance().register(function (action: EventAction) {
            switch (action.actionType) {
                  case ActionID.EVENT_ACTION_CREATE:
                        EventsStore.getInstance().createEvent(action.payload.event);
                        EventsStore.getInstance().emitChange();
                        break;
                  default:
            }
      });
}

export { EventsStore };