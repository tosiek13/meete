declare enum EventRepetition {
    NO,
    WEEKLY,
    MONTHLY,
    ANNUALY
}

interface IWeeklyCalendarProps {
      date: Date,
      startDay: number,
      startHour: number,
      endHour: number,
      fieldsInHour: number
}

interface IWeeklyCalendarFieldProps {
      dayPosition: number, 
      hourPosition: number,
      eventRepetition: EventRepetition,
      fieldClickHandlerSet: IWeeklyCalendarFieldHandlersSet
}

interface IWeeklyCalendarFields {
      intervals: number,
      eventRepetition: EventRepetition,
      fieldClickHandlerSet: IWeeklyCalendarFieldHandlersSet
}

interface IWeeklyCalendarFieldsDayProps {
      intervals: number,
      dayPosition: number,
      eventRepetition: EventRepetition,
      fieldClickHandlerSet: IWeeklyCalendarFieldHandlersSet
}

interface CWeeklyCalendarHeaderDayField {
      date: number,
      month: number
}

interface IWeeklyCalendarHeaderDaysProps {
      weekStartTime: number
}

interface IWeeklyCalendarHeaderDayFieldProps{
       dayName: string,
       date: number,
       month: number
}

interface IWeeklyCalendarHoursProps{
      startTime: number,
      intervals: number,
      intervalLength: number
}

interface IWeeklyCalendarHourFieldProps{
      startDate: Date,
      endDate: Date
}

interface IWeeklyCalendarFieldHandlersSet{
      onMouseDown: Function;
      onMouseUp: Function;
      onMouseOver: Function;
}

interface IRange {
      startTime: number;
      endTime: number;
}


/**************/
interface IWeeklyCalendarHeaderProps{
      switchWeekHandler: Function
}