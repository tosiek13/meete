import {Dispatcher} from "flux";

class AppDispatcher {
      static dispatcher: Dispatcher<any>;

      static getInstance(): Dispatcher<any> {
            if(!this.dispatcher){
                  this.dispatcher = new Dispatcher();
            }
            return this.dispatcher
      }
}

export { AppDispatcher };