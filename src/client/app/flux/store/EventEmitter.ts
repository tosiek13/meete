import { LinkedList, Dictionary } from 'typescript-collections';

class EventEmitter {
      listenersByEventNames: Dictionary<string, LinkedList<Function>>;

      constructor(){
            this.listenersByEventNames = new Dictionary<string, LinkedList<Function>>();
      }

      emit(eventName: string): void {
            let listeners:LinkedList<Function> = this.listenersByEventNames.getValue(eventName);
            listeners.forEach.call(this);
      }


      addListener(eventName: string, listener: Function): ListenerToken {
            let listeners: LinkedList<Function> = this.listenersByEventNames.getValue(eventName);
            if(!listeners){
                  listeners = new LinkedList<Function>();
                  this.listenersByEventNames.setValue(eventName, listeners);
            }
            listeners.add(listener);

            return new ListenerToken(eventName, listener);
      };


      removeListener(listenerToken: ListenerToken) {
            let listeners: LinkedList<Function> = this.listenersByEventNames.getValue(listenerToken.eventName);
            if(listeners){
                  listeners.remove(listenerToken.listener);     
            }
      };
}

class ListenerToken{
      eventName: string;
      listener: Function;

      constructor(eventName: string, listener: Function){
            this.eventName = eventName;
            this.listener = listener;
      }
}

export { ListenerToken, EventEmitter };