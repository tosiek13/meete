import { DTOEvent } from './../dom/DTOEvent';
import { UIDGenerator } from './UIDGenerator';
import { UCalendar } from './calendarUtils';

class UEvent {
      private static DEFAULT_MIN_EVENT_LENGTH = UCalendar.getMilisecondsInHour(1);

      public static createEvent(startTime: number, endTime: number): DTOEvent{
            if((endTime - startTime) < this.DEFAULT_MIN_EVENT_LENGTH){
                  endTime = startTime + this.DEFAULT_MIN_EVENT_LENGTH;
            }

            return new DTOEvent(UIDGenerator.getID(), startTime, endTime);
      }
}



export { UEvent }