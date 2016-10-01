import * as React from "react";

///<reference path='../../../../typings/meete/Calendar.d.ts'/>
import { CWeeklyCalendarHourField } from './CWeeklyCalendarHourField';
import { UCalendar } from './../../utils/calendarUtils';

class CWeeklyCalendarHours extends React.Component<IWeeklyCalendarHoursProps, {}> {
      renderHour(startDate: Date, endDate: Date, position: number) {
		return (
			<div key={position}>
				<CWeeklyCalendarHourField startDate={startDate} endDate={endDate} >
				</CWeeklyCalendarHourField>
			</div>
		);
	}

	render() {
            let startTime = this.props.startTime;
            let intervals = this.props.intervals;
            let intervalLength = this.props.intervalLength;

		let hours: JSX.Element[] = [];
		for (let i = 0; i < intervals; i++) {
                  let startDateMilis = startTime + UCalendar.getMilisecondsInHour(i * intervalLength);
                  let endDateMilis = startDateMilis + UCalendar.getMilisecondsInHour(intervalLength);

                  hours.push(this.renderHour(new Date(startDateMilis), new Date(endDateMilis), i));
		}


		return (
			<div className='weeklyCalendarHours'>
				{ hours }
			</div>
		);
	}
}

export { CWeeklyCalendarHours };