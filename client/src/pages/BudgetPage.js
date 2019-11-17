import React, { Component } from 'react'
import Budgets from "../components/Budgets"
import Container from "react-bootstrap/Container"
export class BudgetPage extends Component {
    render() {
        return (
            <Container>
                <Budgets/>
            </Container>
        )
    }
}

export default BudgetPage
