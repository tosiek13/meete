import * as React from "react";

///<reference path='../../../../typings/meete/Calendar.d.ts'/>
import { CWeeklyCalendarFieldsDay } from './CWeeklyCalendarFieldsDay';

class CWeeklyCalendarFields extends React.Component<IWeeklyCalendarFields, {}> {
      renderHourFields(intervals: number, dayPosition: number, event:Event) {
		return (
			<div key = {dayPosition} className='weeklyCalendarFieldsDayFlex'>
				<CWeeklyCalendarFieldsDay intervals = {intervals} dayPosition={dayPosition} event = {event} >
				</CWeeklyCalendarFieldsDay>
			</div>
		);
	}

	render() {
            let intervals = this.props.intervals;

		var dayHeaders: JSX.Element[] = [];

		for (let dayPosition = 0; dayPosition < 7; dayPosition++) {
            	dayHeaders.push(this.renderHourFields(intervals, dayPosition, null));
		}
		
		return (
			<div className='weeklyCalendarFields'>
				{dayHeaders}
			</div>
		);
	}
}

export { CWeeklyCalendarFields };