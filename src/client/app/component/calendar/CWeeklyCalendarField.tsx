import * as React from "react";

///<reference path='../../../../typings/meete/Calendar.d.ts'/>

class CWeeklyCalendarField extends React.Component<IWeeklyCalendarFieldProps, {}> {
      constructor(props: IWeeklyCalendarFieldProps){
            super(props);
            this.printInfo = this.printInfo.bind(this);
      }
      
      printInfo(){
            console.log("Hit field: " + this.props.dayPosition + ", " + this.props.hourPosition);
      }

	render() {
            return (
                  <div onClick={this.printInfo}>
                        FIELD
                  </div>
            );
      }
}

export { CWeeklyCalendarField };