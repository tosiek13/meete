import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>

import { UserPreferencesInstance } from './../../dom/UserPreferences';
import { WeeklyCalendarFieldActions } from './../../flux/action/WeeklyCalendarFieldActions';

class CWeeklyCalendarField extends React.Component<ICWeeklyCalendarFieldProps, {}> {
      constructor(props: ICWeeklyCalendarFieldProps) {
            super(props);
            this.fireMouseDown = this.fireMouseDown.bind(this);
            this.fireMouseUp = this.fireMouseUp.bind(this);
            this.fireMouseOver = this.fireMouseOver.bind(this);
      }

      fireMouseDown(event: any) {
            let mouseEvent: MouseEvent = event.nativeEvent;
            WeeklyCalendarFieldActions.mouseDown(this.props.startTime, this.props.endTime);
      }
      fireMouseUp() {
            WeeklyCalendarFieldActions.mouseUp(this.props.startTime, this.props.endTime);
      }
      fireMouseOver() {
            WeeklyCalendarFieldActions.mouseOver(this.props.startTime, this.props.endTime);
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

export { CWeeklyCalendarField };