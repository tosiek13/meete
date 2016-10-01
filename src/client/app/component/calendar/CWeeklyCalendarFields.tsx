import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>
import { CWeeklyCalendarFieldsDay } from './CWeeklyCalendarFieldsDay';

class CWeeklyCalendarFields extends React.Component<IWeeklyCalendarFields, {}> {
      renderHourFields(intervals: number, dayPosition: number) {
		return (
			<div key = {dayPosition} className='weeklyCalendarFieldsDayFlex'>
				<CWeeklyCalendarFieldsDay
					intervals = {intervals} 
					dayPosition={dayPosition} 
					eventRepetition={this.props.eventRepetition}
					fieldClickHandlerSet = {this.props.fieldClickHandlerSet}>
				</CWeeklyCalendarFieldsDay>
			</div>
		);
	}

	render() {
            let intervals = this.props.intervals;

		var dayHeaders: JSX.Element[] = [];

		for (let dayPosition = 0; dayPosition < 7; dayPosition++) {
            	dayHeaders.push(this.renderHourFields(intervals, dayPosition));
		}
		
		return (
			<div className='weeklyCalendarFields'>
				{dayHeaders}
			</div>
		);
	}
}

export { CWeeklyCalendarFields };