import { AppDispatcher } from './../dispatcher/Dispatcher';
import { EventEmitter, ListenerToken } from './EventEmitter';
import { ActionID } from './../action/ActionID'; 


import { UWeeklyCalendar, UCalendar } from './../../utils/calendarUtils';

class WeeklyCalendarPropsStore extends EventEmitter {
      CALENDAR_PROPS_EVENT_PROPS: string = "cal_props_chenge_event";

      nodesPerHour:number = 4;
      hoursDayLength:number = 12;
      startDayHour: number = 8;

      static weeklyCalendarHeaderStoreInstance: WeeklyCalendarPropsStore;
      static getInstance(): WeeklyCalendarPropsStore{
            if(!this.weeklyCalendarHeaderStoreInstance){
                  this.weeklyCalendarHeaderStoreInstance = new WeeklyCalendarPropsStore();
            }
            return this.weeklyCalendarHeaderStoreInstance
      }

      constructor() {
            super();
            this.getNodesPerHourAmount= this.getNodesPerHourAmount.bind(this);
            this.getHoursDayLength = this.getHoursDayLength.bind(this);
            this.getStartDayHour = this.getStartDayHour.bind(this);
            registerToDispatcher();
      }

      emitChange() {
            this.emit(this.CALENDAR_PROPS_EVENT_PROPS);
      }

      addChangeListener(callback: Function): ListenerToken {
            this.addListener(this.CALENDAR_PROPS_EVENT_PROPS, callback);
            return new ListenerToken(this.CALENDAR_PROPS_EVENT_PROPS, callback);
      }

      /*getters*/
      getNodesPerHourAmount():number{
            return this.nodesPerHour;
      }
      getHoursDayLength():number{
            return this.hoursDayLength;
      }
      getStartDayHour(): number {
            return this.startDayHour;
      }
}

function registerToDispatcher() {
      AppDispatcher.getInstance().register(function (action: any ) {
            /*switch (action.actionType) {
                  case ActionID.WEEKLY_CAL__SWITCH_WEEK:
                        WeeklyCalendarPropsStore.getInstance().switchWeek(action.payload.weeksAmount);
                        WeeklyCalendarPropsStore.getInstance().emitChange();
                        break;
                  default:
            }*/
      });
}

export { WeeklyCalendarPropsStore };