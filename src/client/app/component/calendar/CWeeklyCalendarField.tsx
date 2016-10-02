import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>

import { UserPreferencesInstance } from './../../dom/UserPreferences'

class CWeeklyCalendarField extends React.Component<IWeeklyCalendarFieldProps, {}> {
      constructor(props: IWeeklyCalendarFieldProps) {
            super(props);
            this.fireMouseDown = this.fireMouseDown.bind(this);
            this.fireMouseUp = this.fireMouseUp.bind(this);
            this.fireMouseOver = this.fireMouseOver.bind(this);
      }

      fireMouseDown() {
            this.props.fieldClickHandlerSet.onMouseDown(this.props.dayPosition, this.props.hourPosition);
      }
      fireMouseUp() {
            this.props.fieldClickHandlerSet.onMouseUp(this.props.dayPosition, this.props.hourPosition);
      }
      fireMouseOver() {
            this.props.fieldClickHandlerSet.onMouseOver(this.props.dayPosition, this.props.hourPosition);
      }

      render() {
            let fieldColor: string = UserPreferencesInstance.getWeeklyCalendarFieldColor(this.props.eventRepetition);
            return (
                  <div
                        onMouseDown={this.fireMouseDown}
                        onMouseUp={this.fireMouseUp}
                        onMouseOver={this.fireMouseOver}

                        style={{
                              backgroundColor: fieldColor,
                        }}
                        >
                        .
                  </div>
            );
      }
}

export { CWeeklyCalendarField };