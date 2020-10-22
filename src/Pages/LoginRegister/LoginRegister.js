import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import "./LoginRegister.scss";

export default class LoginRegister extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
    };
  }

  handleActiveTab = tab => {
    console.log(tab);
    this.setState({
      activeTab: tab
    });
  };

  render() {
    return (
      <div className="loginRegister-BH">
        <main className="loginContainer">
          <img
            className="loginBackdropImage"
            src="Images/LoginBackdrop.jpg"
            alt="profile-link"
          />
          <div className="loginFormWrapper">
            <div className="loginHeading">
              <p className="loginFormTitle">My Account</p>
              <div className="loginOptionTabs">
                <button
                  onClick={() => this.handleActiveTab(0)}
                  className={
                    this.state.activeTab === 0 ? "loginTab" : "inactiveTab"
                  }
                >
                  Log In
                </button>

                <button
                  onClick={() => this.handleActiveTab(1)}
                  className={
                    this.state.activeTab !== 0 ? "activeTab" : "registerTab"
                  }
                >
                  Register
                </button>
              </div>
            </div>
            {MappingObj[this.state.activeTab]}
          </div>
        </main>
      </div>
    );
  }
}

const MappingObj = {
  0: <Login />,
  1: <Register />
};

// //  inside div!!!

// const MAPPING_MENU = ["First", "Second"];

// {
//   MAPPING_MENU.map((menu, idx) => {
//     <button onClick={this.openPage(idx + 1)}>{menu}</button>;
//   });
// }
