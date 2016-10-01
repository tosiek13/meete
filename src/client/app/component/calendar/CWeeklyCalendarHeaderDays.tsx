import * as React from "react";

///<reference path='../../../../typings/meete/Calendar.d.ts'/>
import { CWeeklyCalendarHeaderDayField } from './CWeeklyCalendarHeaderDayField';
import { UCalendar } from './../../utils/calendarUtils';
import { WeekDays } from './../../dom/enums/Calendar';

class CWeeklyCalendarHeaderDays extends React.Component<IWeeklyCalendarHeaderProps, {}> {
      renderDayHeader(dayName: string, date: Date, position: number) {
		return (
			<div
				key={position}
				className='weeklyCalendarHeaderDay'>
				<CWeeklyCalendarHeaderDayField dayName={dayName} month={date.getMonth() } date = {date.getDate() } >
				</CWeeklyCalendarHeaderDayField>
			</div>
		);
	}

	render() {
            let startDate = new Date(this.props.weekStartTime);
		var dayHeaders: JSX.Element[] = [];
		for (let i = 0; i < 7; i++) {
			let date = UCalendar.getNextDay(startDate, i);
			let dayName: string = WeekDays[date.getDay()];
			dayHeaders.push(this.renderDayHeader(dayName, date, i));
		}


		return (
			<div className='weeklyCalendarHeaderDays'>
				{dayHeaders}
			</div>
		);
	}
}

export { CWeeklyCalendarHeaderDays };