import { AppDispatcher } from './../dispatcher/Dispatcher';
import { EventEmitter, ListenerToken } from './EventEmitter';
import { Dictionary } from 'typescript-collections';
import { DTOEvent } from './../../dom/DTOEvent';

class WeeklyCalendarStore extends EventEmitter {
  CHANGE_EVENT: string = "weekly_calendar_event";

  private events: Dictionary<number, IEvent>;

  constructor(){
    super();
    this.events = new Dictionary<number, IEvent>();
  }

  emitChange() {
    this.emit(this.CHANGE_EVENT);
  }

  addChangeListener(callback: Function): ListenerToken {
    this.addListener(this.CHANGE_EVENT, callback);
    return new ListenerToken(this.CHANGE_EVENT, callback);
  }


  create(startDate: number, endDate: number) {
    let id: number = new Date().getTime();
    let event = new DTOEvent(id, startDate, endDate);
    this.events.setValue(id, event);
  }

  delete(id: number) {
    this.events.remove(id);
  }
}

// Register callback to handle all updates
AppDispatcher.getInstance().register(function (action: any) {
  let text: string;

  switch (action.actionType) {
    /*case WeeklyCalendarActionID.CREATE_EVENT:
      let startDate: number = action.startDate;
      let endDate: number = action.endDate;

      weeklyCalendarStoreInstance.create(startDate, endDate);
      weeklyCalendarStoreInstance.emitChange();

      break;
    case WeeklyCalendarActionID.REMEVE_EVENT:
      let id: number = action.id;

      weeklyCalendarStoreInstance.delete(id);
      weeklyCalendarStoreInstance.emitChange();
      break;



    default:*/
  }
});

let weeklyCalendarStoreInstance = new WeeklyCalendarStore();

export { weeklyCalendarStoreInstance };