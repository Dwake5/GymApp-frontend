import React, { Component } from "react";
import { signin } from "../services/api";

class SignInForm extends Component {
  state = {
    username: "",
    password: ""
  };

  signIn = () => {
    signin(this.state.username, this.state.password).then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        this.props.signin(data);
        this.props.history.push('/')
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.signIn()
  };

  quickSignIn = () => {
    this.setState({
      username: 'Guest',
      password: '1guest2'
    }, () =>  this.signIn()
  )}

  updateState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <form className="signup-form" onSubmit={event => this.handleSubmit(event)}>
        <label>
          Username:
          <br />
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.updateState}
          />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.updateState}
          />
        </label>
        <br />
        <button variant="contained" value="Submit" onSubmit={event => this.handleSubmit(event)}>
          {" "}
          Sign In{" "}
        </button>
        <br />
        <br />
        <div id="border" onClick={this.quickSignIn}>
          <h3 id="recruiter"> Recruiters and Guests </h3>
          <p id="removeBotMargin"> Click here for quick sign-in</p>
          <p> on a guest account</p>
        </div>
      </form>
    );
  }
}

export default SignInForm;
