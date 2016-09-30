import * as React from "react";

import { CWeeklyCalendar } from './CWeeklyCalendar';
import { WeekDays } from './../../dom/enums/Calendar';

class FCWeeklyCalendar extends React.Component<{}, {}> {
      state = {
            date:  new Date(),
            startDay: WeekDays.Mon,
            fieldsPerHour: 2,
            startHour: 8,
            endHour: 20
      }

	render() {
		return (
                  <CWeeklyCalendar 
                        date = {this.state.date} 
                        startDay = {this.state.startDay} 
                        fieldsInHour = {this.state.fieldsPerHour}
                        startHour = {this.state.startHour}
                        endHour = {this.state.endHour}>
                  </CWeeklyCalendar>
		);
	}
}

export { FCWeeklyCalendar };