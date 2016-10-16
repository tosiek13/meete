import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>

import { UserPreferencesInstance } from './../../dom/UserPreferences'
import { EventActions } from './../../flux/action/EventActions';

class CWeeklyCalendarEvent extends React.Component<ICWeeklyCalendarEventProps, {}> {
      constructor(props: ICWeeklyCalendarEventProps) {
            super(props);
            this.fireMouseDown = this.fireMouseDown.bind(this);
            this.fireMouseUp = this.fireMouseUp.bind(this);
            this.fireMouseOver = this.fireMouseOver.bind(this);
      }

      fireMouseDown() {
            EventActions.mouseDown(this.props.event);
      }
      fireMouseUp() {
            // WeeklyCalendarFieldActions.mouseUp(this.props.startTime, this.props.endTime);
      }
      fireMouseOver() {
            // WeeklyCalendarFieldActions.mouseOver(this.props.startTime, this.props.endTime);
      }

      render() {
            var divStyle = {
                  gridArea: this.props.rowStart + ' / 1 / ' + this.props.rowEnd + ' / 2',
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