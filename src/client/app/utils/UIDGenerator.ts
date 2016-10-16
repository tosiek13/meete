import { DTOEvent } from './../dom/DTOEvent';

class UIDGenerator {
      private static id = 0;

      public static getID(): number{
            return UIDGenerator.id++;
      }
}



export { UIDGenerator }