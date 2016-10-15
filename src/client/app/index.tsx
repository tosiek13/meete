import * as React from "react";
import { render } from 'react-dom';

import { FCWeeklyCalendar } from './component/calendar/FCWeeklyCalendar';

class App extends React.Component<{}, {}> {


  render() {
    let style01 = {
      'myComponent01 button': {
        backgroundColor: '#FFF',
        color: '#555'
      }
    }
    return (
      <div>
        <FCWeeklyCalendar>
        </FCWeeklyCalendar>
      </div>
    );
    // return (
    //   <div style={style01}>
    //     <div style={style01}>
    //       STH
    //     </div>
    //   </div>
    // );

    // return (
      // <div style={{ display: 'grid', height: 200, gridTemplate: '200px / repeat(4, 1fr)' }}>
      //   <div style={{ background: 'lime', gridRowStart: 'span 2', zIndex: 2 }}>Hello {this.props.name}</div>
      //   <div style={{ background: 'yellow' }}></div>
      //   <div style={{ background: 'blue' }}></div>
      // </div>
    // )
  }
}
render(<App />, document.getElementById('app'));