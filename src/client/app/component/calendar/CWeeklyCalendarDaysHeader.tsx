import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>
import { CWeeklyCalendarDayHeader } from './CWeeklyCalendarDayHeader';
import { WeeklyCalendarPropsStore } from './../../flux/store/WeeklyCalendarPropsStore';
import { WeeklyCalendarHeaderStore } from './../../flux/store/WeeklyCalendarHeaderStore';
import { UCalendar, UWeeklyCalendar } from './../../utils/calendarUtils';
import { WeekDays } from './../../dom/enums/Calendar';

class CWeeklyCalendarDaysHeader extends React.Component<IClassNameProps, {}> {
      constructor(props: IClassNameProps) {
            super(props);
            this.updateAfterWeekChange = this.updateAfterWeekChange.bind(this);
      }
      state = {
            weekStartTime: WeeklyCalendarHeaderStore.getInstance().getPresentedWeekStartTime(),
      }

      componentDidMount() {
            WeeklyCalendarHeaderStore.getInstance().addChangeListener(this.updateAfterWeekChange);
      }

      updateAfterWeekChange() {
            this.setState({
                  weekStartTime: WeeklyCalendarHeaderStore.getInstance().getPresentedWeekStartTime()
            })
      }

      renderDayHeader(month: number, date: number, dayName: string) {
            return (
                  <CWeeklyCalendarDayHeader className="weeklyCalendarDayHeader"
                        key={date}
                        month={month}
                        date={date}
                        dayName={dayName}
                        >
                  </CWeeklyCalendarDayHeader>
            );
      }

      render() {
            var daysHeader: JSX.Element[] = [];
            for (let dayPosition = 0; dayPosition < 7; dayPosition++) {
                  let currentDayTime = this.state.weekStartTime +  UCalendar.getMilisecondsInDay(dayPosition);
                  let currentDayDate = new Date(currentDayTime);
                  let dayName = WeekDays[currentDayDate.getDay()];
                  daysHeader.push(
                        this.renderDayHeader(currentDayDate.getMonth(), currentDayDate.getDate(), dayName)
                  );
            }

            return (
                  <div className={this.props.className}>
                        { daysHeader }
                  </div>
            )
      }
}

export { CWeeklyCalendarDaysHeader };