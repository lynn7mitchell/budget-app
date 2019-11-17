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
import AddTransaction from "./pages/AddTransaction"
import EditBudgets from "./pages/EditBudgets"
import TransactionPage from "./pages/TrasactionPage"
import BudgetPage from "./pages/BudgetPage"
import SetupBudgets from "./pages/SetupBudgets";


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/setup-budgets" component={SetupBudgets} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/transactions" component={TransactionPage} />
            <PrivateRoute exact path="/budgets" component={BudgetPage} />
            <PrivateRoute exact path="/add-transaction" component={AddTransaction} />
            <PrivateRoute exact path="/edit-budgets" component={EditBudgets} />
            <Route exact component={NoMatch} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
