import React from "react";
import "./Register.scss";

const API = "http://10.58.4.225:8000/account/register";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      nameFirstValue: "",
      nameLastValue: "",
      dateValue: "",
      emailValue: "",
      pwValue: "",
      pwConfirmValue: "",
      isChecked: false,
      valid: false,
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
    const {
      dateValue,
      emailValue,
      pwValue,
      pwConfirmValue,
      isChecked
    } = this.state;

    if (pwValue !== pwConfirmValue) {
      this.setState({ errorMessage: "Passwords don't match" });
    } else if (isChecked === false) {
      this.setState({ errorMessage: "You need to accept the privacy policy" });
    } else if (
      emailValue.length < 1 ||
      dateValue.length < 1 ||
      pwValue.length < 1
    ) {
      this.setState({ errorMessage: "Complete all fields" });
    } else return this.setState({ errorMessage: "" });
  };

  handleRegisterButton = e => {
    const {
      emailValue,
      pwValue,
      nameFirstValue,
      nameLastValue,
      dateValue
    } = this.state;

    this.handleValidate();

    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        first_name: nameFirstValue,
        last_name: nameLastValue,
        email: emailValue,
        birth_date: dateValue,
        password: pwValue
      })
    })
      .then(response => response.json())
      .then(result => {
        console.log("================================");
        console.log("백앤드에서 오는 응답 메세지: ", result);
        if (result.message === "SUCCESS") {
          alert("회원가입 성공");
        } else {
          alert("다시 시도해주세용! ;P");
        }
      });
  };

  acceptTermsInput = e => {
    if (e.target.checked) {
      this.setState({
        isChecked: true
      });
    }
  };

  render() {
    const {
      nameFirstValue,
      nameLastValue,
      dateValue,
      emailValue,
      pwValue,
      pwConfirmValue,
      isChecked
    } = this.state;

    let validBtn =
      nameFirstValue.length > 2 &&
      nameLastValue.length > 2 &&
      dateValue.length > 1 &&
      pwValue.length > 4 &&
      pwConfirmValue.length > 4 &&
      emailValue.length > 3 &&
      emailValue.includes("@") &&
      pwValue.value === pwConfirmValue.value &&
      isChecked;

    return (
      <div className="Register-BH">
        <input
          onChange={this.handleInputValue}
          className="nameFirstInput"
          type="text"
          name="nameFirstValue"
          placeholder="First Name"
        />
        <input
          onChange={this.handleInputValue}
          className="nameLastInput"
          type="text"
          name="nameLastValue"
          placeholder="Last Name"
        />
        <input
          onChange={this.handleInputValue}
          className="dateInput"
          type="date"
          name="dateValue"
        />
        <input
          onChange={this.handleInputValue}
          className="emailInput"
          type="text"
          name="emailValue"
          placeholder="Email"
        />
        <input
          onChange={this.handleInputValue}
          className="pwInput"
          type="password"
          name="pwValue"
          placeholder="Password"
        />
        <p className="inputDescription">
          Must be at least 8 characters long and include at least one lowercase
          letter
        </p>
        <input
          onChange={this.handleInputValue}
          className="pwConfirmInput"
          type="password"
          name="pwConfirmValue"
          placeholder="Confirm your Password"
        />
        <button
          onClick={this.handleRegisterButton}
          className={validBtn ? "registerButton active" : "registerButton"}
        >
          OK
        </button>

        {this.state.errorMessage ? (
          <div className="errorWrapper-BH">
            <p className="loginErrorMessage">{this.state.errorMessage}</p>
          </div>
        ) : null}
        <div className="registerAccept">
          <label>
            <input
              type="radio"
              name="acceptTermsInput"
              onChange={this.acceptTermsInput}
              required
            />
            <span className="hover hoverText">
              I've read the privacy policy and I consent sending me marketing
              communications including new on products, community and
              personalized notifications.
            </span>
          </label>
        </div>
      </div>
    );
  }
}

export default Register;
