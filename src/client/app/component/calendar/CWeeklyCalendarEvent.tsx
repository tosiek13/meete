import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>

import { UserPreferencesInstance } from './../../dom/UserPreferences'
import { WeeklyCalendarFieldActions } from './../../flux/action/WeeklyCalendarFieldActions'
import { WeeklyCalendarFieldsStore } from './../../flux/store/WeeklyCalendarFieldsStore'

class CWeeklyCalendarEvent extends React.Component<ICWeeklyCalendarEventProps, {}> {
      constructor(props: ICWeeklyCalendarEventProps) {
            super(props);
            // this.fireMouseDown = this.fireMouseDown.bind(this);
            // this.fireMouseUp = this.fireMouseUp.bind(this);
            // this.fireMouseOver = this.fireMouseOver.bind(this);
      }

      fireMouseDown() {
            // WeeklyCalendarFieldActions.mouseDown(this.props.startTime, this.props.endTime);
      }
      fireMouseUp() {
            // WeeklyCalendarFieldActions.mouseUp(this.props.startTime, this.props.endTime);
      }
      fireMouseOver() {
            // WeeklyCalendarFieldActions.mouseOver(this.props.startTime, this.props.endTime);
      }

      render() {
            var gridColumnStart: number;

            var divStyle = {
                  background: '#20324f',
                  gridRowStart: 1,
                  gridRowEnd: 1,
                  gridColumnStart: 'auto',
                  zIndex: 10
            };
            return (
                  <div className={this.props.className}
                        onMouseDown={this.fireMouseDown}
                        onMouseUp={this.fireMouseUp}
                        onMouseOver={this.fireMouseOver}
                        style={
                              divStyle
                        }>
                  </div>
            );
      }
}

export { CWeeklyCalendarEvent };