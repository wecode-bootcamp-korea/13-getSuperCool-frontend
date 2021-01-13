import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import LoginRegister from "./Pages/LoginRegister/LoginRegister";
import Contact from "./Pages/Contact/Contact";
import ForgotPw from "./Pages/LoginRegister/Components/ForgotPw";
import Product from "./Pages/ProductList/Components/Product/Product";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/shop" component={ProductList} />
          <Route exact path="/LoginRegister" component={LoginRegister} />
          <Route exact path="/shop/:id" component={ProductDetails} />
          <Route exact path="/shop/:id/:color" component={ProductDetails} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/ForgotPw" component={ForgotPw} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
