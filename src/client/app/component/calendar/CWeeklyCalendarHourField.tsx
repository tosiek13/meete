import * as React from "react";

///<reference path='../../../../typings/meete/Calendar.d.ts'/>

class CWeeklyCalendarHourField extends React.Component<IWeeklyCalendarHourFieldProps, {}> {
	render() {
            let startHour: number = this.props.startDate.getHours();
            let startMinute: number = this.props.startDate.getMinutes();

            let endHour: number = this.props.endDate.getHours();
            let endMinute: number = this.props.endDate.getMinutes();

            return (
                  <div style={{
                        background: '#C8CFC0'
                  }}>
                        {startHour}:{startMinute} - {endHour}:{endMinute}
                  </div>
            );
      }
}

export { CWeeklyCalendarHourField };