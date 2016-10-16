import * as React from "react";
import { render } from 'react-dom';

import { FCWeeklyCalendar } from './component/calendar/FCWeeklyCalendar';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <FCWeeklyCalendar>
        </FCWeeklyCalendar>
      </div>
    );
    // return (
    //   <div>
    //   </div>
    // );
  }
}
render(<App />, document.getElementById('app'));