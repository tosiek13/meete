import * as React from "react";

import { CWeeklyCalendar } from './CWeeklyCalendar';
import { CWeeklyCalendarHeader } from './CWeeklyCalendarHeader';
import { WeekDays } from './../../dom/enums/Calendar';
import { UCalendar } from './../../utils/calendarUtils';

class FCWeeklyCalendar extends React.Component<{}, {}> {

      constructor(){
            super();
            this.switchWeek = this.switchWeek.bind(this);
      }

      state = {
            date:  new Date(),
            startDay: WeekDays.Mon,
            fieldsPerHour: 2,
            startHour: 8,
            endHour: 20
      }

	render() {
		return (
                  <div className='FCWeeklyCalendar'>
                        <CWeeklyCalendarHeader switchWeekHandler={this.switchWeek}>
                        </CWeeklyCalendarHeader>
                        <CWeeklyCalendar
                              date = {this.state.date} 
                              startDay = {this.state.startDay} 
                              fieldsInHour = {this.state.fieldsPerHour}
                              startHour = {this.state.startHour}
                              endHour = {this.state.endHour}>
                        </CWeeklyCalendar>
                  </div>
		);
	}

      switchWeek(skipAmount: number){
            let date = this.state.date;
            this.setState({
                  date: new Date(date.getTime() + (UCalendar.getMilisecondsInDay(7) * skipAmount))
            });
      }
}

export { FCWeeklyCalendar };