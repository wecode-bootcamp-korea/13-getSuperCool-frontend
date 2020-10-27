import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import ForgotPw from "./ForgotPw";
import "./Login.scss";

const API = "http://10.58.4.225:8000/account/login";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailValue: "",
      pwValue: "",
      errorMessage: ""
    };
  }

  handleInputValue = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
    this.setState({ errorMessage: "" });
  };

  handleValidate = () => {
    const { emailValue, pwValue } = this.state;
    if (!emailValue.includes("@")) {
      this.setState({ errorMessage: "Your email is required" });
    } else if (emailValue.length < 2 || pwValue.length < 2) {
      this.setState({ errorMessage: "Wrong password or email" });
    } else return this.setState({ errorMessage: "" });
  };

  handleLoginButton = e => {
    const { emailValue, pwValue } = this.state;

    this.handleValidate();

    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: pwValue
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log("================================");
        console.log("백앤드에서 오는 응답 메세지: ", response);

        if (response.Authorization) {
          alert("로그인 성공");
          localStorage.setItem("token", response.Authorization);
        }
      });
  };

  render() {
    return (
      <Router>
        <Switch>
          <div className="Login-BH">
            <input
              className="emailInput"
              onChange={this.handleInputValue}
              type="text"
              name="emailValue"
              placeholder="Email"
            ></input>
            <input
              className="pwInput"
              onChange={this.handleInputValue}
              type="password"
              name="pwValue"
              placeholder="Password"
            ></input>
            <button
              onClick={this.handleLoginButton}
              className={
                this.state.pwValue.length > 4 &&
                this.state.emailValue.includes("@")
                  ? "loginButtonActive"
                  : "loginButton"
              }
              type="submit"
            >
              Login
            </button>

            {this.state.errorMessage ? (
              <div className="errorWrapper-BH">
                <p className="loginErrorMessage">{this.state.errorMessage}</p>
              </div>
            ) : null}

            <div className="loginHelp">
              <Link to="./ForgotPw">
                <button
                  className="forgotPw"
                  onClick={() => this.handleForgotPassword}
                >
                  Forgot your password?
                </button>
              </Link>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}
