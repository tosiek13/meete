import * as React from "react";

import { CWeeklyCalendar } from './CWeeklyCalendar';
import { CWeeklyCalendarHeader } from './CWeeklyCalendarHeader';
import { WeekDays } from './../../dom/enums/Calendar';
import { UCalendar } from './../../utils/calendarUtils';
import { WeeklyCalendarHeaderStore } from './../../flux/store/WeeklyCalendarHeaderStore';

class FCWeeklyCalendar extends React.Component<{}, {}> {

      constructor(){
            super();
            this.update = this.update.bind(this);
      }

      state = {
            date:  new Date(),
            startDay: WeekDays.Mon,
            fieldsPerHour: 2,
            startHour: 8,
            endHour: 20
      }

      componentDidMount() {
            WeeklyCalendarHeaderStore.getInstance().addChangeListener(this.update);
      }

	render() {
		return (
                  <div className='FCWeeklyCalendar'>
                        <CWeeklyCalendarHeader>
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

      update(){
            let newDate = WeeklyCalendarHeaderStore.getInstance().getPresentedWeekStartTime();
            this.setState({
                  date: new Date(newDate)
            });
      }
}

export { FCWeeklyCalendar };