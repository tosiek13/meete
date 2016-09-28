import * as React from "react";
import {render} from 'react-dom';

import {CWeeklyCalendar} from './component/calendar/CWeeklyCalendar';

class App extends React.Component<{}, {}> {


  render() {
    let date = new Date();
    let startDay = 1;
    return (
      <div>
				<CWeeklyCalendar date = { date } startDay = { startDay }>
				</CWeeklyCalendar>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));