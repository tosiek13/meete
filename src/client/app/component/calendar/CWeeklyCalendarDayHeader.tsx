import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>

class CWeeklyCalendarDayHeader extends React.Component<ICWeeklyCalendarDayHeaderProps, {}> {
	render() {
            return (
                  <div className = {this.props.className}>
                        {this.props.dayName}
                        <div>
                              {this.props.date}.{this.props.month + 1}
                        </div>
                  </div>
            );
      }
}

export { CWeeklyCalendarDayHeader };