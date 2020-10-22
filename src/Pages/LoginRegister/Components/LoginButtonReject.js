import React from "react";
// import { Link } from "react-router-dom";
import "./LoginButtonReject.scss";

class LoginButtonReject extends React.Component {
  render() {
    return (
      <div className="errorWrapper-BH">
        <p className="loginErrorMessage">Wrong password or email</p>
      </div>
    );
  }
}

export default LoginButtonReject;
