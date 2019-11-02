import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./utils/PrivateRoute";
import Events from "./pages/Events";
import Navbar from "./components/basic/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/SignUp";
import CreateEvent from "./components/CreateEvent";
import CreateAnnouncement from "./components/CreateAnnouncement";

import AdminSwitch from "./components/basic/AdminSwitch";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/SignUp" component={SignUp} />
            <PrivateRoute exact path="/Navbar" component={Navbar} />

            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/events" component={Events} />
            <PrivateRoute exact path="/createevent" component={CreateEvent} />
            <PrivateRoute
              exact
              path="/createannouncement"
              component={CreateAnnouncement}
            />
            <Route exact component={NoMatch} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
