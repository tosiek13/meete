import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>

import { UserPreferencesInstance } from './../../dom/UserPreferences'
import { WeeklyCalendarFieldsStore } from './../../flux/store/WeeklyCalendarFieldsStore'

class CWeeklyCalendarField extends React.Component<IWeeklyCalendarFieldProps, {}> {
      constructor(props: IWeeklyCalendarFieldProps) {
            super(props);
            this.fireMouseDown = this.fireMouseDown.bind(this);
            this.fireMouseUp = this.fireMouseUp.bind(this);
            this.fireMouseOver = this.fireMouseOver.bind(this);
      }

      fireMouseDown() {
            WeeklyCalendarFieldsStore.getInstance().mouseDown(this.props.dayPosition, this.props.hourPosition);
      }
      fireMouseUp() {
            WeeklyCalendarFieldsStore.getInstance().mouseUp(this.props.dayPosition, this.props.hourPosition);
      }
      fireMouseOver() {
            WeeklyCalendarFieldsStore.getInstance().mouseOver(this.props.dayPosition, this.props.hourPosition);
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