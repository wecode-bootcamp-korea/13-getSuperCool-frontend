import React from "react";
import "./ForgotPw.scss";

const API = "http://10.58.0.174:8000/account/";

export default class ForgotPw extends React.Component {
  constructor() {
    super();
    this.state = {
      emailValue: ""
    };
  }

  handleEmailValue = e => {
    const { value } = e.target;
    this.setState({
      emailValue: value
    });
  };

  handleForgotPwButton = () => {
    const { emailValue } = this.state;

    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        email: emailValue
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
      <div className="ForgotPw-BH">
        <div className="forgotPwHeading">
          <p className="forgotPwTitle">Forgot Your Password?</p>
        </div>
        <div className="forgotPwForm">
          <input
            className="emailInput"
            onChange={this.handleEmailValue}
            type="password"
            name="emailValue"
            placeholder="Email"
          ></input>
          <button
            onClick={this.handleForgotPwButton}
            className={
              this.state.emailValue.length > 4 &&
              this.state.emailValue.includes("@")
                ? "forgotButtonActive"
                : "forgotButton"
            }
            type="submit"
          >
            OK
          </button>
        </div>
      </div>
    );
  }
}
