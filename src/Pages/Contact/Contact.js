import React, { Component } from "react";
import "./Contact.scss";
import { countryOptions, subjectOptions } from "./Config";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      emailValue: "",
      nameValue: "",
      orderNumberValue: "",
      countryValue: "",
      subjectValue: "",
      messageValue: "",
      requiredInput: false
    };
  }
  handleInputValue = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
      requiredInput: false
    });
  };

  handleValidate = () => {
    const { emailValue, nameValue, subjectValue, messageValue } = this.state;

    if (
      !emailValue.includes("@") ||
      emailValue.length < 2 ||
      nameValue.length < 2 ||
      messageValue.length < 2 ||
      !subjectValue
    ) {
      this.setState({
        requiredInput: true
      });
    } else return this.setState({ requiredInput: false });
  };

  handleRegisterButton = e => {
    e.preventDefault();
    //     const {
    //       emailValue,
    //       pwValue,
    //       nameFirstValue,
    //       nameLastValue,
    //       dateValue
    //     } = this.state;

    this.handleValidate();

    //   fetch(API, {
    //     method: "POST",
    //     body: JSON.stringify({
    //       first_name: nameFirstValue,
    //       last_name: nameLastValue,
    //       email: emailValue,
    //       birth_date: dateValue,
    //       password: pwValue
    //     })
    //   })
    //     .then(response => response.json())
    //     .then(result => {
    //       console.log("================================");
    //       console.log("백앤드에서 오는 응답 메세지: ", result);
    //       if (result.message === "SUCCESS") {
    //         alert("회원가입 성공");
    //         localStorage.setItem("register", result.message);
    //       }
    //     });
  };

  render() {
    const { emailValue, nameValue, subjectValue, messageValue } = this.state;

    let validBtn =
      emailValue.length > 2 &&
      nameValue.length > 2 &&
      messageValue.length > 3 &&
      emailValue.includes("@") &&
      subjectValue;

    console.log(emailValue, nameValue.length, messageValue.length);
    return (
      <div className="Contact">
        <main>
          <p className="contactTitle">CONTACT</p>
          <div className="contactContainer">
            <aside className="moreInfoWrapper">
              <div className="moreInformation">
                <div className="marquee">
                  <div>
                    <span>
                      FREE SHIPPING ON ORDERS OVER 34€ · 10% DISCOUNT IF YOU
                      SUBSCRIBE TO THE NEWSLETTER
                    </span>
                    <span>
                      FREE SHIPPING ON ORDERS OVER 34€ · 10% DISCOUNT IF YOU
                      SUBSCRIBE TO THE NEWSLETTER ·{" "}
                    </span>
                  </div>
                </div>
                <span className="infoTitle">Chat With Us:</span>
                <span>
                  If available, click on the icon at the right bottom of the
                  page
                </span>
                <span className="infoTitle">Message Us:</span>
                <span>Fill the form in this page</span>
                <span className="infoTitle">
                  For purchase related inquiries:
                </span>
                <span>humans@getsuperfluid.com</span>
                <span className="infoTitle">
                  For business and press related inquiries:
                </span>
                <span>quirks@getsuperfluid.com</span>
              </div>
            </aside>
            <div className="messageFormWrapper">
              <form className="messageForm">
                <div className="formInstructions">
                  <p> Please fill the following fields</p>
                  <span>*Mandatory</span>
                </div>
                <input
                  onChange={this.handleInputValue}
                  className={
                    this.state.requiredInput
                      ? "requiredInputError"
                      : "emailInput"
                  }
                  type="text"
                  name="emailValue"
                  placeholder="Email *"
                />
                <input
                  onChange={this.handleInputValue}
                  className={
                    this.state.requiredInput
                      ? "requiredInputError"
                      : "nameInput"
                  }
                  type="text"
                  name="nameValue"
                  placeholder="Name *"
                />
                <input
                  onChange={this.handleInputValue}
                  className="orderNumberInput"
                  type="text"
                  name="orderNumberValue"
                  placeholder="Order Number"
                />
                <label className="countrySelect">
                  <select
                    value={this.state.value}
                    onChange={this.handleInputValue}
                    name="countryValue"
                  >
                    <option selected="selected">Country</option>
                    {countryOptions.map(country => (
                      <option id={country.id}>{country.value}</option>
                    ))}
                  </select>
                </label>
                <label
                  className={
                    this.state.requiredInput
                      ? "requiredInputError"
                      : "subjectSelect"
                  }
                >
                  <select
                    onChange={this.handleInputValue}
                    value={this.state.value}
                    name="subjectValue"
                  >
                    <option selected="selected">Subject *</option>
                    {subjectOptions.map(subject => (
                      <option id={subject.id}>{subject.value}</option>
                    ))}
                  </select>
                </label>
                <textarea
                  onChange={this.handleInputValue}
                  className={
                    this.state.requiredInput
                      ? "messageContent textareaError"
                      : "messageContent"
                  }
                  placeholder="Your Message *"
                  name="messageValue"
                ></textarea>
                <button
                  onClick={this.handleRegisterButton}
                  className={validBtn ? "sendButton active" : "sendButton"}
                >
                  OK
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
