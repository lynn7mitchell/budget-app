import React, { Component } from 'react'
import Transactions from "../components/Transactions"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class Dashboard extends Component {
    // DASHBOARD or SUMMARY
    //Transactions
    //Crypto Watch
    //Money News
    render() {
        return (
            <div>
                {/* <i className="material-icons account-circle">account_circle</i> */}
                <Row>
                    <Col xs={2} className="dashboard-sidebar">
                        <h4>Welcome Name</h4>
                        <ul className="sidebar-items">
                            <li>Dashboard</li>
                            <li>Tansactions</li>
                            <li>Crypto Watch</li>
                            <li>Your Account</li>
                            <li>Log Out</li>
                        </ul>
                    </Col>
                    <Col xs={10}>
                        <Container>
                            <Row>
                                <Col className="card" md={7}>
                                    <Transactions />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard
