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
          <Route exact path='/' Component={Main}/>
          <Route exact path='/ProductList' Component={ProductList}/>
          <Route exact path='/ProductDetails' Component={ProductDetails}/>
          <Route exact path='/LoginResgister' Component={LoginResgister}/>
          <Route exact path='/ProductDetails/:id' Component={ProductDetails}/>
        </Switch>
      </>
    )
  }
}

export default Routes;