import React from "react";
// import { Link } from "react-router-dom";
import "./Login.scss";
import LoginButtonReject from "./LoginButtonReject";
import ForgotPw from "./ForgotPw";

const API = "http://10.58.0.174:8000/account/";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailValue: "",
      pwValue: "",
      forgotTab: false
    };
  }

  handleInputValue = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleForgotPassword = e => {
    this.setState({
      forgotTab: true
    });
  };

  // handleErrorMessage = e => {
  //     {(this.state.emailValue.length < 1 || this.state.pwValue.length < 1 ? (
  //         <LoginButtonReject />
  //       ) : null}
  // }

  handleLoginButton = e => {
    const { emailValue, pwValue } = this.state;

    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: pwValue
      })
    })
      .then(response => response.json())
      .then(result => {
        console.log("================================");
        console.log("백앤드에서 오는 응답 메세지: ", result);

        if (result.access_token) {
          alert("로그인 성공");
        }
      });
  };

  render() {
    return (
      <div
        className={
          "loginForm-BH"
        }
      >
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
          // onClick={this.handleErrorMessage}
          className={
            this.state.pwValue.length > 4 && this.state.emailValue.includes("@")
              ? "loginButtonActive"
              : "loginButton"
          }
          type="submit"
        >
          Login
        </button>
        <div onClick={() => this.handleLoginButton}></div>
        <div className="loginHelp">
          <button
            className="forgotPw"
            onClick={() => this.handleForgotPassword}
          >
            Forgot your password?
          </button>
        </div>
      </div>
    );
  }
}
