import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>

class CWeeklyCalendarHeaderDayField extends React.Component<IWeeklyCalendarHeaderDayFieldProps, {}> {
	render() {
            return (
                  <div className='weeklyCalendarHeaderDay'>
                        {this.props.dayName}
                        <div>
                              {this.props.date}.{this.props.month + 1}
                        </div>
                  </div>
            );
      }
}

export { CWeeklyCalendarHeaderDayField };