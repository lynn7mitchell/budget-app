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
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
        <Navbar className="dashboard-nav" expand="lg">
          <Navbar.Brand href="#home">Budget Master</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ marginTop: "15px" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link><Link to="/transactions">Transactions</Link></Nav.Link>
            <Nav.Link><Link to="/budgets">Budgets</Link></Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Row>
          <Col md={2} className="dashboard-sidebar">
            <Sidebar />
          </Col>
          <Col xs={12} md={10}>
            <Container>
              <Row>
                <Col className="card" xs={12} md={7}>
                  <Transactions />
                </Col>
                <Col className="card" xs={12} md={5}>
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
