import React from "react";
// import { Link } from "react-router-dom";
import "./Register.scss";

// const API = "http://10.58.0.174:8000/account/";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      nameFirstValue: "",
      nameLastValue: "",
      dateInput: "",
      emailValue: "",
      pwValue: "",
      pwConfirmValue: "",
      isChecked: false
    };
  }

  handleInputValue = e => {
    const { value, name, isChecked } = e.target;
    this.setState({
      [name]: value,
      isChecked: true
    });
  };

  handleRegisterButton = e => {
    const { emailValue, pwValue } = this.state;

    // fetch(API, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     first_name: nameFirstValue,
    //     last_name: nameLastValue,
    //     email: emailValue,
    //     birth_date: dateInput,
    //     password: pwValue
    //   })
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log("================================");
    //     console.log("백앤드에서 오는 응답 메세지: ", result);

    //     if (result.access_token) {
    //       alert("회원가입 성공");
    //     }
    //   });
  };

  render() {
    return (
      <div className="registerForm-BH">
        <input
          onChange={this.handleInputValue}
          className="nameFirstInput"
          type="text"
          name="nameFirstValue"
          placeholder="First Name"
        ></input>
        <input
          onChange={this.handleInputValue}
          className="nameLastInput"
          type="text"
          name="nameLastValue"
          placeholder="Last Name"
        ></input>
        <input
          onChange={this.handleInputValue}
          className="dateInput"
          type="date"
          name="dateValue"
        ></input>
        <input
          onChange={this.handleInputValue}
          className="emailInput"
          type="text"
          name="emailValue"
          placeholder="Email"
        ></input>
        <input
          onChange={this.handleInputValue}
          className="pwInput"
          type="password"
          name="pwValue"
          placeholder="Password"
        ></input>
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
        ></input>
        <button
          onClick={this.handleRegisterButton}
          className="registerButton"
          //   className={
          //     this.state[name].length > 4 &&
          //     this.state.emailValue.includes("@") &&
          //     this.state.pwValue.value === this.state.pwConfirmValue.value
          //     this.state.isChecked !== false
          //       ? "registerButtonActive"
          //       : "registerButton"
          //   }
        >
          OK
        </button>
        <div className="registerAccept">
          <label>
            <input
              type="radio"
              name="acceptTermsInput"
              value={this.state.isChecked}
              checked={this.state.acceptTermsInput}
              onChange={this.handleInputValue}
              required
            />
            <span>
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
