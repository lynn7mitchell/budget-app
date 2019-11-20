import React, { Component } from "react";
import { Link } from "react-router-dom"
import Transactions from "../components/Transactions";
import Container from "react-bootstrap/Container";
export class TrasactionPage extends Component {
  render() {
    return (
      <Container>
        <Link to="/dashboard">
          <i className="material-icons back-button">arrow_back</i>
        </Link>
        <Transactions />
      </Container>
    );
  }
}

export default TrasactionPage;
