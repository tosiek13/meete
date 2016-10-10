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

interface IRange {
      startTime: number;
      endTime: number;
}