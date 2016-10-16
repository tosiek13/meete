import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>
import { CWeeklyCalendarDay } from './CWeeklyCalendarDay';
import { WeeklyCalendarPropsStore } from './../../flux/store/WeeklyCalendarPropsStore';
import { WeeklyCalendarHeaderStore } from './../../flux/store/WeeklyCalendarHeaderStore';
import { WeeklyCalendarFieldsStore } from './../../flux/store/WeeklyCalendarFieldsStore';
import { UCalendar, UWeeklyCalendar } from './../../utils/calendarUtils';

class CWeeklyCalendarDays extends React.Component<IClassNameProps, {}> {
      constructor(props: IClassNameProps) {
            super(props);
            this.updateCalendatPropsChange = this.updateCalendatPropsChange.bind(this);
            this.updateAfterWeekChange = this.updateAfterWeekChange.bind(this);
      }
      state = {
            weekStartTime: WeeklyCalendarHeaderStore.getInstance().getPresentedWeekStartTime(),
            hoursDayLength: WeeklyCalendarPropsStore.getInstance().getHoursDayLength(),
            nodesPerHour: WeeklyCalendarPropsStore.getInstance().getNodesPerHourAmount(),
            startDayMilis: WeeklyCalendarPropsStore.getInstance().getStartDayHour()
      }

      componentDidMount() {
            WeeklyCalendarPropsStore.getInstance().addChangeListener(this.updateCalendatPropsChange);
            WeeklyCalendarHeaderStore.getInstance().addChangeListener(this.updateAfterWeekChange);
            WeeklyCalendarFieldsStore.getInstance();
      }

      updateCalendatPropsChange() {
            let weeklyCalenarStore = WeeklyCalendarPropsStore.getInstance();
            this.setState({
                  hoursDayLength: weeklyCalenarStore.getHoursDayLength(),
                  nodesPerHour: weeklyCalenarStore.getNodesPerHourAmount(),
                  startDayMilis: weeklyCalenarStore.getStartDayHour()
            });
      }

      updateAfterWeekChange() {
            this.setState({
                  weekStartTime: WeeklyCalendarHeaderStore.getInstance().getPresentedWeekStartTime()
            })
      }

      renderHourFields(dayStartTime: number, hoursInDay: number, nodesPerHour: number) {
            return (
                  <CWeeklyCalendarDay className=""
                        key={dayStartTime}
                        dayStartTime={dayStartTime}
                        hoursInDay={hoursInDay}
                        nodesPerHour={nodesPerHour}
                        >
                  </CWeeklyCalendarDay>
            );
      }

      render() {
            var days: JSX.Element[] = [];
            for (let dayPosition = 0; dayPosition < 7; dayPosition++) {
                  let dayStartTime = this.state.weekStartTime +
                        UCalendar.getMilisecondsInDay(dayPosition) +
                        UCalendar.getMilisecondsInHour(this.state.startDayMilis);
                  days.push(
                        this.renderHourFields(dayStartTime, this.state.hoursDayLength, this.state.nodesPerHour)
                  );
            }

            return (
                  <div className={this.props.className}>
                        {days}
                  </div>
            )
      }
}

export { CWeeklyCalendarDays };