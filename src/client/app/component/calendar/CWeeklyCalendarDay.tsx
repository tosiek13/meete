import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>
import { CWeeklyCalendarField } from './CWeeklyCalendarField';
import { CWeeklyCalendarDayHeader } from './CWeeklyCalendarDayHeader';
import { UCalendar } from './../../utils/calendarUtils';
import { WeekDays } from './../../dom/enums/Calendar';

class CWeeklyCalendarDay extends React.Component<ICWeeklyCalendarDayProps, {}> {
	constructor(props: ICWeeklyCalendarDayProps){
		super(props);
	}

	renderField(startTime: number, endTime: number) {
		return (
			<CWeeklyCalendarField className="weeklyCalendarField"
				key={startTime}
				startTime={startTime}
				endTime={endTime}>
			</CWeeklyCalendarField>
		);
	}

	render() {
		let startTime = this.props.dayStartTime;
		let hoursInDay = this.props.hoursInDay;
		let nodesPerHour = this.props.nodesPerHour;

		let nodeLength = UCalendar.getMilisecondsInHour(1 / nodesPerHour);
		let nodesAmount = nodesPerHour * hoursInDay;

		var dayFields: JSX.Element[] = [];
		for (let i = 0; i < nodesAmount; i++) {
			dayFields.push(this.renderField(startTime, startTime + nodeLength));
			startTime += nodeLength;
		}
		let date: Date = new Date(startTime);

		return (
			<div className={this.props.className}>
				{dayFields}
			</div>
		);
	}

}

export { CWeeklyCalendarDay };