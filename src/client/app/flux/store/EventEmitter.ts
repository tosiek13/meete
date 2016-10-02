import { LinkedList, Dictionary } from 'typescript-collections';

class EventEmitter {
      //listenersByEventNames: Dictionary<string, LinkedList<Function>>;

      listenersByEventNames: { [name: string]: Function[]; } = {
      }

      emit(eventName: string): void {
            let callBacks: Function[] = this.listenersByEventNames[eventName];
            if (callBacks) {
                  for (let i = 0; i < callBacks.length; i++) {
                        let callBack = callBacks[i];
                        callBack.call;
                  }
            }
      }


      addListener(eventName: string, listener: Function): ListenerToken {
            let callBacks: Function[] = this.listenersByEventNames[eventName];
            if (!callBacks) {
                  callBacks = [];
            }
            callBacks.push(listener);
            this.listenersByEventNames[eventName] = callBacks;

            return new ListenerToken(eventName, listener);
      };


      removeListener(listenerToken: ListenerToken) {
            /* let callBacks: Function[] = this.listenersByEventNames[listenerToken.eventName];
             if(callBacks){
                  delete callBacks[listenerToken.listener];     
             }*/
      };
}

class ListenerToken {
      eventName: string;
      listener: Function;

      constructor(eventName: string, listener: Function) {
            this.eventName = eventName;
            this.listener = listener;
      }
}

export { ListenerToken, EventEmitter };