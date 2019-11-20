import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import Transactions from "../components/Transactions";
import Budgets from "../components/Budgets";
import Container from "react-bootstrap/Container";
import axios from "axios";
import setAuthToken from "../utils/setAuthtoken";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "../components/Sidebar";

export class Dashboard extends Component {
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
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        {/* <i className="material-icons account-circle">account_circle</i> */}
        
        <Row>
        <Col md={2} className="dashboard-sidebar">
          <Sidebar/>
        </Col>
          <Col xs={12} md={10}>
            <Container>
              <Row>
                <Col className="card" md={7}>
                  <Transactions />
                </Col>
                <Col className="card" md={5}>
                  <Budgets />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>

        
      </div>
    );
  }
}

export default Dashboard;
