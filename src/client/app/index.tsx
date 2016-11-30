import * as React from "react";
import { render } from 'react-dom';

import { FCWeeklyCalendar } from './component/calendar/FCWeeklyCalendar';
import { FCLoginForm } from './component/loginForm/FCLoginForm';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <FCLoginForm className="loginFormContainer">
        </FCLoginForm>
        <FCWeeklyCalendar>
        </FCWeeklyCalendar>
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));