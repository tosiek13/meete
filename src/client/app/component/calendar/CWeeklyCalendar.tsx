import * as React from "react";

///<reference path='../../../../typings/meete/Calendar.d.ts'/>
import { CWeeklyCalendarHeaderDays } from './CWeeklyCalendarHeaderDays';
import { CWeeklyCalendarHours } from './CWeeklyCalendarHours';
import { CWeeklyCalendarFields } from './CWeeklyCalendarFields';
import { UWeeklyCalendar } from './../../utils/calendarUtils';

class CWeeklyCalendar extends React.Component<IWeeklyCalendar, {}> {
	render() {
		let startDate: Date = UWeeklyCalendar.getStartDate(this.props.date, 1);
		let begDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(),
			8, 0, 0, 0);
		let endDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(),
			20, 0, 0, 0);
		let intervalInHours = 2;
		let intervals = UWeeklyCalendar.getIntervalsAmount(intervalInHours, endDate, begDate);
		let intervalLength = 1 / intervalInHours;

		return (
			<div className='weeklyCalendarGrid'>
				<div className='weeklyCalendarEtiquete'>
					Etiquete
				</div>	
				<CWeeklyCalendarHours startDate = {begDate} endDate = { endDate } intervals = {intervals} intervalLength = {intervalLength}>
				</CWeeklyCalendarHours>
				<CWeeklyCalendarHeaderDays startDate = {startDate}>
				</CWeeklyCalendarHeaderDays>
				<CWeeklyCalendarFields intervals = {intervals}>
				</CWeeklyCalendarFields>
			</div>
		);
	}
}

export { CWeeklyCalendar };