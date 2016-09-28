import * as React from "react";

///<reference path='../../../../typings/meete/Calendar.d.ts'/>

class CWeeklyCalendarHeaderDayField extends React.Component<IWeeklyCalendarHeaderFieldProps, {}> {
	render() {
            return (
                  <div className='weeklyCalendarHeaderDay'>
                        {this.props.dayName}
                        <div>
                              {this.props.date}.{this.props.month}
                        </div>
                  </div>
            );
      }
}

export { CWeeklyCalendarHeaderDayField };