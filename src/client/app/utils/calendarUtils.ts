class UWeeklyCalendar {
      // returns first day
      static getStartDate(dateToShow:Date, firstWeekDay: number = 0): Date{
            let dayToShow = dateToShow.getDay();
            let startDate = dateToShow.getTime();
            startDate -= UCalendar.getMilisecondsInDay(dateToShow.getDay() - firstWeekDay);
            
            return new Date(startDate);
      }

      static getDayDate(position: number, startDay: number, startDate: Date): Date{
            return  new Date(startDate.getTime() + UCalendar.getMilisecondsInDay(position + startDay));
      }

      static getIntervalsAmount(intervalInHours: number, endDate: Date, startDate: Date): number{
            return intervalInHours * (endDate.getTime() - startDate.getTime()) / UCalendar.getMilisecondsInHour();
      }
}

class UCalendar {
      static getMilisecondsInDay(daysAmount: number = 1): number{
            return (24 * 3600 * 1000 * daysAmount);
      }

      static getMilisecondsInHour(hoursAmount: number = 1): number{
            return (3600 * 1000 * hoursAmount);
      }

      static getNextDay(date: Date, daysAmount: number = 1): Date {
            return new Date(date.getTime() + UCalendar.getMilisecondsInDay(daysAmount));
      }
}

export { UWeeklyCalendar, UCalendar }