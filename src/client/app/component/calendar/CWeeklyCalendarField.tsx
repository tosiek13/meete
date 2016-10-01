import * as React from "react";

///<reference path='../../../../typings/meete/Calendar.d.ts'/>

class CWeeklyCalendarField extends React.Component<IWeeklyCalendarFieldProps, {}> {
      constructor(props: IWeeklyCalendarFieldProps){
            super(props);
            this.fireClickEvent = this.fireClickEvent.bind(this);
      }
      
      fireClickEvent(){
            this.props.fieldClickHandler(this.props.dayPosition, this.props.hourPosition);
      }

	render() {
            return (
                  <div onClick={this.fireClickEvent}>
                        FIELD
                  </div>
            );
      }
}

export { CWeeklyCalendarField };