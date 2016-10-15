class DTOEvent {
      id: number;
      startTime: number;
      endTime: number;

      constructor(id: number, startTime: number, endTime: number) {
            this.id = id;
            this.startTime = startTime;
            this.endTime = endTime;
      }
}

export { DTOEvent };