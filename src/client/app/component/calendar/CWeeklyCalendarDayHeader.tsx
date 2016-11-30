import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>
import {UFormatter} from './../../utils/UFormatter';

class CWeeklyCalendarDayHeader extends React.Component<ICWeeklyCalendarDayHeaderProps, {}> {
	render() {
            // {UFormatter.}
            //                   {this.props.}.{this.props.month + 1}
            return (
                  <div className = {this.props.className}>
                        {this.props.dayName}
                        <div>
                              complete
                        </div>
                  </div>
            );
      }
}

export { CWeeklyCalendarDayHeader };