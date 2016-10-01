import * as React from "react";
//import { FontAwesome } from 'react-fontawesome';

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>
import { FontAwesomeComponent } from './../FontAwesomeComponent';
class CWeeklyCalendarHeader extends React.Component<IWeeklyCalendarHeaderProps, {}> {
      constructor(props: IWeeklyCalendarHeaderProps) {
            super(props);
            this.fireNextWeek = this.fireNextWeek.bind(this);
            this.firePrevWeek = this.firePrevWeek.bind(this);
      }

      firePrevWeek() {
            this.props.switchWeekHandler(-1);
      }

      fireNextWeek() {
            this.props.switchWeekHandler(1);
      }

      render() {
            let size = 36;
            return (
                  <div>
                        <FontAwesomeComponent 
                              name='angle-left' 
                              size='3x'
                              fireClick={this.firePrevWeek}>
                        </FontAwesomeComponent>
                        {'  CHANGE WEEK  '}
                        <FontAwesomeComponent 
                              name='angle-right' 
                              size='3x'
                              fireClick={this.fireNextWeek}>
                        </FontAwesomeComponent>
                  </div>
            );
      }
}

export { CWeeklyCalendarHeader };