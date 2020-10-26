import React, { Component } from "react";
import "./Contact.scss";

export default class Contact extends Component {
  //   constructor() {
  //     super();
  //     this.state = {};
  //   }

  render() {
    return (
      <div className="Contact-BH">
        <main>
          <p className="contactTitle">CONTACT</p>
          <div className="contactContainer">
            <aside className="moreInformation">
              <span>Chat With Us:</span>
              <p>
                If available, click on the icon at the right bottom of the page
              </p>
              <span>Message Us:</span>
              <p>Fill the form in this page</p>
              <span>For purchase related inquiries:</span>
              <p>humans@getsuperfluid.com</p>
              <span>For business and press related inquiries:</span>
              <p>quirks@getsuperfluid.com</p>
            </aside>
            <div className="messageFormWrapper">
              <section className="messageForm">
                <div className="formInstructions">
                  <p> Please fill the following fields</p>
                  <span>*Mandatory</span>
                </div>
                <input
                  className="emailInput"
                  type="text"
                  name="emailInput"
                  placeholder="Email"
                />
                <input
                  className="nameInput"
                  type="text"
                  name="nameInput"
                  placeholder="Name"
                />
                <input
                  className="orderNumberInput"
                  type="text"
                  name="orderNumberInput"
                  placeholder="Order Number"
                />
                <label className="countrySelect">
                  {/* <select value={this.state.value} onChange={this.handleChange}> */}
                  <select>
                    <option>Grapefruit</option>
                    <option>Grapefruit</option>
                    <option>Grapefruit</option>
                    <option>Grapefruit</option>
                    <option>Grapefruit</option>
                  </select>
                </label>
                <label>
                  <select className="subjectSelect">
                    <option>Grapefruit</option>
                    <option>Grapefruit</option>
                    <option>Grapefruit</option>
                    <option>Grapefruit</option>
                    <option>Grapefruit</option>
                  </select>
                </label>
                <textarea
                  className="messageContent"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button className="sendButton" type="submit">
                  OK
                </button>
                <label className="acceptTermsInput">
                  <input
                    type="radio"
                    name="acceptTermsInput"
                    //   onChange={this.acceptTermsInput}
                    required
                  />
                  <span>
                    I've read the privacy policy and I consent to Superfluid
                    sending me marketing communications.
                  </span>
                </label>
              </section>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
