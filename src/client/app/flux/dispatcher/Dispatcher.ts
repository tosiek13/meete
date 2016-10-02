//mport {Dispatcher} from "flux";
import * as flux from 'flux';

class AppDispatcher {
      static dispatcher: flux.Dispatcher<WeeklyCalendarHeaderAction>;

      static getInstance(): flux.Dispatcher<WeeklyCalendarHeaderAction> {
            if(!this.dispatcher){
                  this.dispatcher = new flux.Dispatcher<WeeklyCalendarHeaderAction>();
            }
            return this.dispatcher;
      }
}

export { AppDispatcher };