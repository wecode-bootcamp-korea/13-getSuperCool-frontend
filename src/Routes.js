import React from "react";
import {Switch, Route} from "react-router-dom";

import Main from "./Pages/Main/Main";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import LoginResgister from "./Pages/LoginRegister/LoginRegister";

// import './Routes.scss';

class Routes extends React.Component {
  render(){
    return(
      <>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/ProductList' component={ProductList}/>
          <Route exact path='/ProductDetails' component={ProductDetails}/>
          <Route exact path='/LoginResgister' component={LoginResgister}/>
          <Route exact path='/ProductDetails/:id' component={ProductDetails}/>
        </Switch>
      </>
    )
  }
}

export default Routes;