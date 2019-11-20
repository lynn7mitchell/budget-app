import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Budgets from "../components/Budgets"
import Container from "react-bootstrap/Container"
export class BudgetPage extends Component {
    render() {
        return (
            <Container>
                <Link to="/dashboard">
          <i className="material-icons back-button">arrow_back</i>
        </Link>
                <Budgets/>
            </Container>
        )
    }
}

export default BudgetPage
