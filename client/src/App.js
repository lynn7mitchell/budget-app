import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import PrivateRoute from "./utils/PrivateRoute";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard"


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact component={NoMatch} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
