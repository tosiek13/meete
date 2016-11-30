import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>

import {UFormatter} from './../../utils/UFormatter';

class CWeeklyCalendarHourField extends React.Component<IWeeklyCalendarHourFieldProps, {}> {
	render() {
            return (
                  <div style={{
                        background: '#C8CFC0'
                  }}>
                        {UFormatter.getHourWithMinutes(this.props.startTime)} 
                        {" - "}
                        {UFormatter.getHourWithMinutes(this.props.endTime)}
                  </div>
            );
      }
}

export { CWeeklyCalendarHourField };