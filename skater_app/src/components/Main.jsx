import React from "react";
import Create from "./Create";
import Home from "./Home";
import Skaters from "./Skaters";
import Login from "./Login";
import CreateSkaters from './CreateSkater';
import { Link, Route } from "react-router-dom";
import Skater from "./Skater";

function Main(props) {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/createskaters" component={CreateSkaters} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/skaters" component={Skaters} />
      <Route exact path="/skaters/:id" component={Skater} />
    </div>
  );
}

// const Login = {
//     userName = '',
//     password = '',
// }

export default Main;
