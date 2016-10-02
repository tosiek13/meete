class UWeeklyCalendar {
      /* Returns first day(hour 00:00).getTime()
            @dateToShow - date that will be presented in weeklyCalendar View
            @firstWeekDay - specifies first Day Of The Week
      */
      static getStartTime(dateToShow:Date, firstWeekDay: number = 0): number{
            let dayToShow = dateToShow.getDay();
            let startDateMilis = dateToShow.getTime();
            startDateMilis -= UCalendar.getMilisecondsInDay(dateToShow.getDay() - firstWeekDay);
            let firstDayDate = new Date(startDateMilis);
            let weekStartTime = new Date(firstDayDate.getFullYear(), firstDayDate.getMonth(), firstDayDate.getDate()).getTime();
            
            return weekStartTime;
      }

      static getDayDate(position: number, startDay: number, startDate: Date): Date{
            return  new Date(startDate.getTime() + UCalendar.getMilisecondsInDay(position + startDay));
      }

      static getIntervalsAmount(startDayTime: number, endDayTime: number, fieldsInHour: number): number{
            return fieldsInHour * (endDayTime - startDayTime) / UCalendar.getMilisecondsInHour();
      }
}

class UCalendar {
      static getMilisecondsInDay(daysAmount: number = 1): number{
            return (24 * 3600 * 1000 * daysAmount);
      }

      static getMilisecondsInHour(hoursAmount: number = 1): number{
            return (3600 * 1000 * hoursAmount);
      }

      /**
      *@deprecated('use getNextDay(time: number, daysAmount:number = 1): Time instead')
      **/
      static getNextDay(date: Date, daysAmount: number = 1): Date {
            return new Date(date.getTime() + UCalendar.getMilisecondsInDay(daysAmount));
      }
}

class Range implements IRange {
      startTime: number;
      endTime: number;

      constructor(startTime: number, endTime: number){
            this.startTime = startTime;
            this.endTime = endTime;
      }
}

export { UWeeklyCalendar, UCalendar, Range }