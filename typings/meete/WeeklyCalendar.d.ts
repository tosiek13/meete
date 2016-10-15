declare enum EventRepetition {
      NO,
      WEEKLY,
      MONTHLY,
      ANNUALY
}

interface IClassNameProps {
      className: string;
}
interface IStyleProps {
      style: string;
}


interface ICWeeklyCalendarFieldProps extends IClassNameProps {
      startTime: number;
      endTime: number;
      rowStart: number;
      rowEnd: number;
}

interface ICWeeklyCalendarEventProps extends IClassNameProps {
      event: DTOEvent;
      rowStart: number;
      rowEnd: number;
}

interface ICWeeklyCalendarDayProps extends IClassNameProps {
      dayStartTime: number
      hoursInDay: number
      nodesPerHour: number
}

interface ICWeeklyCalendarDayHeaderProps extends IClassNameProps {
      dayName: string,
      date: number,
      month: number
}



/*STATE*/



/////////
interface IWeeklyCalendarProps {
      date: Date,
      startDay: number,
      startHour: number,
      endHour: number,
      fieldsInHour: number
}

interface IWeeklyCalendarFieldProps {
      startTime: number,
      endTime: number,
}

interface IWeeklyCalendarFields {
      intervals: number,
      eventRepetition: EventRepetition,
}

interface IWeeklyCalendarFieldsDayProps {
      intervals: number,
      dayPosition: number,
      eventRepetition: EventRepetition,
}

interface CWeeklyCalendarHeaderDayField {
      date: number,
      month: number
}

interface IWeeklyCalendarHeaderDaysProps {
      weekStartTime: number
}

interface IWeeklyCalendarHoursProps {
      startTime: number,
      intervals: number,
      intervalLength: number
}

interface IWeeklyCalendarHourFieldProps {
      startDate: Date,
      endDate: Date
}

interface IRange {
      startTime: number;
      endTime: number;
}