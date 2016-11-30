import {DTOEvent} from './DTOEvent';

class DTOFullEvent extends DTOEvent{
      name: string;
      description: string;

      constructor(event: DTOEvent) {
            super(event.id, event.startTime, event.endTime);
      }
}

export { DTOFullEvent };