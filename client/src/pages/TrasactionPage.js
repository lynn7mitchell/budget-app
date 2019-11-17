import React, { Component } from 'react'
import Transactions from "../components/Transactions"
import Container from "react-bootstrap/Container"
export class TrasactionPage extends Component {
    render() {
        return (
            <Container>
                <Transactions/>
            </Container>
        )
    }
}

export default TrasactionPage
