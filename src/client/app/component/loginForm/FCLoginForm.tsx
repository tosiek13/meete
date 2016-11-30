import * as React from "react";

///<reference path='../../../../typings/meete/WeeklyCalendar.d.ts'/>
import { AuthenticationStore } from './../../flux/store/AuthenticationStore';
import { AuthenticationActions } from './../../flux/action/AuthenticationActions';

class FCLoginForm extends React.Component<ICLoginFormProps, {}> {
      username: string;
      password: string;

      constructor(props: ICLoginFormProps) {
            super(props);
            this.update = this.update.bind(this);
            this.handleUsernameChange = this.handleUsernameChange.bind(this);
            this.handlePasswordChange = this.handlePasswordChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
      }

      state = {
            username: "",
            password: ""
      }

      componentDidMount() {
            AuthenticationStore.getInstance().addAuthenticationChangeListener(this.update);
      }

      update(){
            //TODO
      }
      handleUsernameChange(event: any) {
            this.setState({ username: event.target.value });
      }
      handlePasswordChange(event: any) {
            this.setState({ password: event.target.value });
      }
      handleSubmit(event: any){
            AuthenticationActions.logIn(this.state.username, this.state.password);
            event.preventDefault();
            this.setState({password:""})
      }


      render() {
            return (
                  <div className={this.props.className}>
                        <form onSubmit={this.handleSubmit}>
                              <label><b>Username</b></label>
                              <input type="text" value={this.state.username} onChange={this.handleUsernameChange} required />

                              <label><b>Password</b></label>
                              <input type="password" value={this.state.password} onChange={this.handlePasswordChange} required />

                              <button type="submit">Login</button>
                        </form>
                  </div>
            );
      }
}

export { FCLoginForm };