import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.scss";



const API = "http://10.58.7.186:8000/account/login";

class Login extends React.Component {
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
      [name]: value,
      errorMessage: ""
    });
  };

  handleValidate = () => {
    const { emailValue, pwValue } = this.state;
    if (!emailValue.includes("@")) {
      this.setState({ errorMessage: "Please enter your full email" });
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

        if (response.AUTHORIZATION) {
          this.props.history.push("/");
          localStorage.setItem("token", response.AUTHORIZATION);
        } else alert("로그인 실패");
      });
  };

  render() {
    return (
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
            this.state.pwValue.length > 4 && this.state.emailValue.includes("@")
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
          <Link to="/ForgotPw">
            <button
              className="forgotPw"
              onClick={() => this.handleForgotPassword}
            >
              Forgot your password?
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);