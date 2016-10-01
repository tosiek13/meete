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
      fieldClickHandler: Function
}

interface IWeeklyCalendarFields {
      intervals: number,
      fieldClickHandler: Function
}

interface IWeeklyCalendarFieldsDayProps {
      intervals: number,
      dayPosition: number,
      fieldClickHandler: Function
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


/**************/
interface IWeeklyCalendarHeaderProps{
      switchWeekHandler: Function
}