import * as React from "react";
//import { FontAwesome } from 'react-fontawesome';

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>
import { FontAwesomeComponent } from './../FontAwesomeComponent';
import { WeeklyCalendarHeaderActions } from './../../flux/action/WeeklyCalendarHeaderActions';
import { WeeklyCalendarHeaderStore } from './../../flux/store/WeeklyCalendarHeaderStore'

class CWeeklyCalendarHeader extends React.Component<{}, {}> {
      componentDidMount() {
            WeeklyCalendarHeaderStore.getInstance();
      }

      firePrevWeek() {
            WeeklyCalendarHeaderActions.switchWeeks(-1);
      }

      fireNextWeek() {
            WeeklyCalendarHeaderActions.switchWeeks(1);
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