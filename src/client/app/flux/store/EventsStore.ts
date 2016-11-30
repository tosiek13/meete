import { AppDispatcher } from './../dispatcher/Dispatcher';
import { EventEmitter, ListenerToken } from './EventEmitter';
import { DTOEvent } from './../../dom/DTOEvent';
import { ActionID } from './../action/ActionID';
import { EventActions } from './../../flux/action/EventActions';
import { EventsSync } from './../../engine/EventsSync';

import { UWeeklyCalendar, UCalendar } from './../../utils/calendarUtils';
import { UEvent } from './../../utils/UEvent';

class EventsStore extends EventEmitter {
    FIELD_CHANGE_EVENT: string = "weekly_calendar_field_change_event";
    EVENT_CHANGE: string = "event_modification";

    eventsByDate: { [dayInMonth: number]: DTOEvent[]; } = {}
    presentedWeekStartTime: number;
    eventStartTime: number;

    static eventsStoreInstance: EventsStore;
    static getInstance(): EventsStore {
        if (!this.eventsStoreInstance) {
            this.eventsStoreInstance = new EventsStore();
        }
        return this.eventsStoreInstance
    }

    constructor() {
        super();
        registerToDispatcher();
        this.mouseDown_Field = this.mouseDown_Field.bind(this);
        this.mouseOver_Field = this.mouseOver_Field.bind(this);
        this.mouseUp_Field = this.mouseUp_Field.bind(this);
        this.mouseDown_Event = this.mouseDown_Event.bind(this);
        this.mouseOver_Event = this.mouseOver_Event.bind(this);
        this.mouseUp_Event = this.mouseUp_Event.bind(this);
        this.getUserEvents = this.getUserEvents.bind(this);
        this.createEvent = this.createEvent.bind(this);
    }

    emitEventChange() {
        this.emit(this.EVENT_CHANGE);
    }
    emitFieldChange() {
        this.emit(this.EVENT_CHANGE);
    }

    addEventChangeListener(callback: Function): ListenerToken {
        this.addListener(this.EVENT_CHANGE, callback);
        return new ListenerToken(this.EVENT_CHANGE, callback);
    }
    addFieldChangeListener(callback: Function): ListenerToken {
        this.addListener(this.FIELD_CHANGE_EVENT, callback);
        return new ListenerToken(this.FIELD_CHANGE_EVENT, callback);
    }

    /*returns events for specified by dayTime day*/
    getUserEvents(date: Date): DTOEvent[] {
        let events: DTOEvent[] = this.eventsByDate[date.getDate()];
        if (!events) {
            events = [];
        }
        return events;
    }

    createEvent(startTime: number, endTime: number): void {
        let event = UEvent.createEvent(startTime, endTime);

        let day = new Date(event.startTime).getDate();
        let events: DTOEvent[] = this.eventsByDate[day];
        if (!events) {
            events = [];
        }
        events.push(event);
        this.eventsByDate[day] = events;
        EventsSync.postStringWithJQuerry();
        EventsSync.postUserEvent(event);
        // EventsSync.getUserEvents(20, 100).then(param => { console.log(param)});
        //EventsSync.postString("Mystring");
        //EventsSync.addEventFetch(event);
    }

    mouseDown_Field(startTime: number, endTime: number) {
        this.eventStartTime = startTime;
        console.log("Field CLICK");
    }
    mouseUp_Field(startTime: number, endTime: number) {
        if (this.eventStartTime) {
            this.createEvent(this.eventStartTime, endTime);
        }
    }
    mouseOver_Field(startTime: number, endTime: number) {
    }

    mouseDown_Event(event: DTOEvent) {
        console.log("Event CLICKED");
    }
    mouseUp_Event(event: DTOEvent) {
    }
    mouseOver_Event(event: DTOEvent) {
    }
}

function registerToDispatcher() {
    AppDispatcher.getInstance().register(function (action: EventAction) {
        switch (action.actionType) {
            case ActionID.EVENT_ACTION_MOUSE_DOWN:
                EventsStore.getInstance().mouseDown_Event(action.payload.event);
                EventsStore.getInstance().emitEventChange();
                break;
            default:
        }
    });

    AppDispatcher.getInstance().register(function (action: WeeklyCalendarFieldAction) {
        switch (action.actionType) {
            case ActionID.WEEKLY_CAL__MOUSE_DOWN:
                EventsStore.getInstance().mouseDown_Field(action.payload.startTime, action.payload.endTime);
                EventsStore.getInstance().emitEventChange();
                break;
            case ActionID.WEEKLY_CAL__MOUSE_UP:
                EventsStore.getInstance().mouseUp_Field(action.payload.startTime, action.payload.endTime);
                EventsStore.getInstance().emitEventChange();
                break;
            case ActionID.WEEKLY_CAL__MOUSE_OVER:
                EventsStore.getInstance().mouseOver_Field(action.payload.startTime, action.payload.endTime);
                EventsStore.getInstance().emitEventChange();
                break;
            default:
        }
    });
}

export { EventsStore };