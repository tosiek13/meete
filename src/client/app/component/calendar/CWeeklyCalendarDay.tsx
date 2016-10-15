import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>
import { CWeeklyCalendarField } from './CWeeklyCalendarField';
import { CWeeklyCalendarEvent } from './CWeeklyCalendarEvent';
import { CWeeklyCalendarDayHeader } from './CWeeklyCalendarDayHeader';
import { EventsStore } from './../../flux/store/EventsStore';
import { UCalendar } from './../../utils/calendarUtils';
import { WeekDays } from './../../dom/enums/Calendar';
import { DTOEvent } from './../../dom/DTOEvent';

class CWeeklyCalendarDay extends React.Component<ICWeeklyCalendarDayProps, {}> {
	constructor(props: ICWeeklyCalendarDayProps) {
		super(props);
	}

	state = {
		events: EventsStore.getInstance().getUserEvents(this.props.dayStartTime)
	}

	componentDidMount() {
		//EventsStore.getInstance();
	}

	renderField(startTime: number, endTime: number, rowStart:number, rowEnd: number ) {
		return (
			<CWeeklyCalendarField className=""
				key={startTime}
				startTime={startTime}
				endTime={endTime}
				rowStart={rowStart}
				rowEnd={rowEnd}
				>
			</CWeeklyCalendarField >
		);
	}

	renderEvent(event: DTOEvent, rowStart: number, rowEnd: number) {
		return (
			<CWeeklyCalendarEvent className=""
				key={event.id}
				event={event}
				rowStart={rowStart}
				rowEnd={rowEnd}
				>
			</CWeeklyCalendarEvent >
		);
	}

	render() {
		let startTime = this.props.dayStartTime;
		let hoursInDay = this.props.hoursInDay;
		let nodesPerHour = this.props.nodesPerHour;

		let nodeLength = UCalendar.getMilisecondsInHour(1 / nodesPerHour);
		let nodesAmount = nodesPerHour * hoursInDay;

		var dayFields: JSX.Element[] = [];
		let tempTime = startTime;
		for (let i = 0; i < nodesAmount; i++) {
			dayFields.push(this.renderField(tempTime, tempTime + nodeLength, i, i+1));
			tempTime += nodeLength;
		}

		var events: JSX.Element[] = [];
		for(let event of this.state.events){
			let timeFromEventStartToDayStart = event.startTime - startTime;
			let timeFromEventEndToDayStart = event.startTime - startTime;
			let milisInHour = UCalendar.getMilisecondsInHour(1);
			let gridStart = Math.round( timeFromEventStartToDayStart / milisInHour * nodesPerHour );
			let gridEnd = Math.round( timeFromEventStartToDayStart / milisInHour * nodesPerHour );

			events.push(this.renderEvent(event, gridStart, gridEnd));
		}


		return (
			<div className={this.props.className}
				style={{ 
					display: 'grid', 
      				gridTemplateColumns: 'auto',
					gridTemplateRows: 'repeat(40, auto)'}}>
				{dayFields}
				{events}
			</div>
		);
	}
}

export { CWeeklyCalendarDay };