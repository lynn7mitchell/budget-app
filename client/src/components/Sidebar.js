import React, { Component } from "react";
import axios from "axios";
import setAuthToken from "../utils/setAuthtoken";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

export class Sidebar extends Component {
    state = {
        user: {},
        redirect: false
      };
      componentWillMount() {
        const token = localStorage.getItem("example-app");
    
        if (token) {
          setAuthToken(token);
        }
    
        axios
          .get("api/user")
          .then(response => {
            this.setState({
              user: response.data
            });
          })
          .catch(err => console.log(err.response));
      }
      handleLogout = () => {
        localStorage.removeItem("example-app");
        this.setState({
          redirect: true
        });
      };
  render() {
    return (
      <div>
          <h4>
            Welcome {this.state.user.firstName} {this.state.user.lastName}
          </h4>
          <ul className="sidebar-items">
            <Link to="/budgets">
              <li>Dashboard</li>
            </Link>
            <Link to="/transactions">
              <li>Transactions</li>
            </Link>
            <Link to="/budgets">
              <li>Budgets</li>
            </Link>
            <a onClick={this.handleLogout}>
              <li cursor="pointer">Log Out</li>
            </a>
          </ul>
        
      </div>
    );
  }
}

export default Sidebar;
