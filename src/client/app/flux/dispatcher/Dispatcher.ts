//mport {Dispatcher} from "flux";
import * as flux from 'flux';

class AppDispatcher {
      static dispatcher: flux.Dispatcher<Action>;

      static getInstance(): flux.Dispatcher<Action> {
            if(!this.dispatcher){
                  this.dispatcher = new flux.Dispatcher<Action>();
            }
            return this.dispatcher;
      }
}

export { AppDispatcher };