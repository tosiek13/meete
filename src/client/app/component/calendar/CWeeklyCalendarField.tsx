import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>

import { UserPreferencesInstance } from './../../dom/UserPreferences'
import { WeeklyCalendarFieldActions } from './../../flux/action/WeeklyCalendarFieldActions'
import { WeeklyCalendarFieldsStore } from './../../flux/store/WeeklyCalendarFieldsStore'

class CWeeklyCalendarField extends React.Component<IWeeklyCalendarFieldProps, {}> {
      constructor(props: IWeeklyCalendarFieldProps) {
            super(props);
            this.fireMouseDown = this.fireMouseDown.bind(this);
            this.fireMouseUp = this.fireMouseUp.bind(this);
            this.fireMouseOver = this.fireMouseOver.bind(this);
            this.update = this.update.bind(this);
      }

      state = {
            color: ''
      }

      componentDidMount() {
            WeeklyCalendarFieldsStore.getInstance().addChangeListener(this.update);
      }

      fireMouseDown() {
            WeeklyCalendarFieldActions.mouseDown(this.props.dayPosition, this.props.hourPosition);
      }
      fireMouseUp() {
            WeeklyCalendarFieldActions.mouseUp(this.props.dayPosition, this.props.hourPosition);
      }
      fireMouseOver() {
            WeeklyCalendarFieldActions.mouseOver(this.props.dayPosition, this.props.hourPosition);
      }

      update(){
            console.log("Field Update");
            let color: string = WeeklyCalendarFieldsStore.getInstance().getColor(this.props.dayPosition, this.props.hourPosition)
            this.setState({
                  color: color
            });
      }

      render() {
            //let fieldColor: string = UserPreferencesInstance.getWeeklyCalendarFieldColor(this.props.eventRepetition);
            let fieldColor: string = this.state.color;
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