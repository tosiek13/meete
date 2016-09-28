import * as React from "react";

///<reference path='../../../../typings/meete/Calendar.d.ts'/>
import { CWeeklyCalendarField } from './CWeeklyCalendarField';

class CWeeklyCalendarFieldsDay extends React.Component<IWeeklyCalendarFieldsDay, {}> {
      renderField(hourPosition: number, dayPosition:number, event:Event) {
		return (
			<div key={hourPosition * 7 + dayPosition} className='weeklyCalendarField'>
				<CWeeklyCalendarField hourPosition={hourPosition} dayPosition={dayPosition} event={null}>
				</CWeeklyCalendarField>
			</div>
		);
	}

	render() {
            let event = this.props.event;
		let intervals = this.props.intervals;
		let dayPosition = this.props.dayPosition;

		var dayHeaders: JSX.Element[] = [];
            for(let hourPosition = 0; hourPosition < intervals; hourPosition++ ){
                  dayHeaders.push(this.renderField(hourPosition, dayPosition, null));
            }


		return (
			<div>
				{ dayHeaders }
			</div>
		);
	}
}

export { CWeeklyCalendarFieldsDay };