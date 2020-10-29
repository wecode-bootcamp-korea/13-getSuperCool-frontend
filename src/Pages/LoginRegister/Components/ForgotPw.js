import React from "react";
import "./ForgotPw.scss";

const API = "http://10.58.7.186:8000/account/forgot-password";

export default class ForgotPw extends React.Component {
  constructor() {
    super();
    this.state = {
      emailValue: "",
      errorMessage: ""
    };
  }

  handleEmailValue = e => {
    const { value } = e.target;
    this.setState({
      emailValue: value,
      errorMessage: ""
    });
  };

  handleValidate = () => {
    const { emailValue } = this.state;

    if (!emailValue.includes("@")) {
      this.setState({ errorMessage: "Your email is required" });
    } else if (emailValue.length < 2) {
      this.setState({ errorMessage: "Complete all fields" });
    } else return this.setState({ errorMessage: "" });
  };

  handleForgotPwButton = () => {
    const { emailValue } = this.state;

    this.handleValidate();

    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        email: emailValue
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log("================================");
        console.log("백앤드에서 오는 응답 메세지: ", response);

        if (response.new_pw) {
          alert("성공", response.new_pw);
        } else {
          alert("아 슬프다");
        }
      });
  };

  render() {
    return (
      <div className="ForgotPw-BH">
        <main className="loginContainer">
          <img
            className="loginBackdropImage"
            src="Images/LoginBackdrop.jpg"
            alt="profile-link"
          />
          <div className="ForgotPw">
            <div className="forgotPwHeading">
              <p className="forgotPwTitle">Forgot Your Password?</p>
            </div>
            <div className="forgotPwForm">
              <input
                className="emailInput"
                onChange={this.handleEmailValue}
                type="text"
                name="emailValue"
                placeholder="Email"
              ></input>
              <button
                onClick={this.handleForgotPwButton}
                className={
                  this.state.emailValue.length > 4 &&
                  this.state.emailValue.includes("@")
                    ? "forgotButton active"
                    : "forgotButton"
                }
                type="submit"
              >
                OK
              </button>
              {this.state.errorMessage ? (
                <div className="errorWrapper-BH">
                  <p className="loginErrorMessage">{this.state.errorMessage}</p>
                </div>
              ) : null}
            </div>
          </div>
        </main>
      </div>
    );
  }
}
