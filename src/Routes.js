import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import LoginRegister from "./Pages/LoginRegister/LoginRegister";
import Contact from "./Pages/Contact/Contact";
import ForgotPw from "./Pages/LoginRegister/Components/ForgotPw";
// import './Routes.scss';

class Routes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" Component={Main} />
          <Route exact path="/ProductList" Component={ProductList} />
          <Route exact path="/ProductDetails" Component={ProductDetails} />
          <Route exact path="/LoginRegister" Component={LoginRegister} />
          <Route exact path="/ProductDetails/:id" Component={ProductDetails} />
          <Route exact path="/Contact" Component={Contact} />
          <Route exact path="/ForgotPw" Component={ForgotPw} />
        </Switch>
      </>
    );
  }
}

export default Routes;
