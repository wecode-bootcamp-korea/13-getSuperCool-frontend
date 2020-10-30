import React, { Component } from "react";
import Nav from "../Components/Nav/Nav";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Footer from "../Components/Footer/Footer"
import "./LoginRegister.scss";

const MappingObj = {
  0: <Login />,
  1: <Register />
};

export default class LoginRegister extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0
    };
  }

  handleActiveTab = tab => {
    this.setState({
      activeTab: tab
    });
  };

  render() {
    return (
      <div className="LoginRegister">
        <Nav />
        <div className="loginContainerMain">
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
        </div>
        <Footer />
      </div>
    );
  }
}
