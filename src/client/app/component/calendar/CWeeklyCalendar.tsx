import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>
import { CWeeklyCalendarHeaderDays } from './CWeeklyCalendarHeaderDays';
import { CWeeklyCalendarHours } from './CWeeklyCalendarHours';
import { CWeeklyCalendarFields } from './CWeeklyCalendarFields';
import { UWeeklyCalendar, UCalendar, Range} from './../../utils/calendarUtils';
import { DTOEvent } from './../../dom/DTOEvent';
import { SelectionEngine } from './../../dom/engine/SelectionEngine';
import { EventRepetition } from './../../dom/enums/EventRepetition';

class CWeeklyCalendar extends React.Component<IWeeklyCalendarProps, {}> {
	weekStartTime: number;
	firstDayStartTime: number;
	firstDayEndTime: number;
	intervals: number;
	intervalLength_ms: number;

	fieldClickHandlerSet: IWeeklyCalendarFieldHandlersSet = {
		onMouseDown: this.handleOnMouseDown.bind(this),
		onMouseUp: this.handleOnMouseUp.bind(this),
		onMouseOver: this.handleOnMouseOver.bind(this)
	}

	constructor(props: IWeeklyCalendarProps) {
		super(props);
		this.getFieldRange = this.getFieldRange.bind(this);
	}

	render() {
		this.weekStartTime = UWeeklyCalendar.getStartTime(this.props.date, this.props.startDay);
		this.firstDayStartTime = this.weekStartTime + UCalendar.getMilisecondsInHour(this.props.startHour);
		this.firstDayEndTime = this.weekStartTime + UCalendar.getMilisecondsInHour(this.props.endHour);

		this.intervals = UWeeklyCalendar.getIntervalsAmount(this.firstDayStartTime, this.firstDayEndTime, this.props.fieldsInHour);
		this.intervalLength_ms = 1 / this.props.fieldsInHour;

		return (
			<div className='weeklyCalendarGrid'>
				<div className='weeklyCalendarEtiquete'>
					Etiquete
				</div>
				<CWeeklyCalendarHours startTime = { this.firstDayStartTime }  intervals = {this.intervals} intervalLength = {this.intervalLength_ms}>
				</CWeeklyCalendarHours>
				<CWeeklyCalendarHeaderDays weekStartTime = {this.weekStartTime}>
				</CWeeklyCalendarHeaderDays>
				<CWeeklyCalendarFields intervals = {this.intervals} fieldClickHandlerSet = {this.fieldClickHandlerSet} eventRepetition={EventRepetition.WEEKLY}>
				</CWeeklyCalendarFields>
			</div>
		);
	}

	getFieldRange(dayPosition: number, hourPosition: number) {
		let daysMiliseconds: number = UCalendar.getMilisecondsInDay(dayPosition);
		let hour_ms: number = UCalendar.getMilisecondsInHour(hourPosition / this.props.fieldsInHour);
		let startTimeMiliseconds: number = this.firstDayStartTime + daysMiliseconds + hour_ms;
		let endTimeMiliseconds: number = startTimeMiliseconds + UCalendar.getMilisecondsInHour(1 / this.props.fieldsInHour);

		let event: DTOEvent = new DTOEvent(1, startTimeMiliseconds, endTimeMiliseconds);

		return new Range(startTimeMiliseconds, endTimeMiliseconds);
	}

	handleOnMouseDown(dayPosition: number, hourPosition: number) {
		this.getFieldRange(dayPosition, hourPosition);
	}
	handleOnMouseUp(dayPosition: number, hourPosition: number) {
		this.getFieldRange(dayPosition, hourPosition);
	}
	handleOnMouseOver(dayPosition: number, hourPosition: number) {
		this.getFieldRange(dayPosition, hourPosition);
	}
}

export { CWeeklyCalendar };