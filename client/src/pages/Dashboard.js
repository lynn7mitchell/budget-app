import React, { Component } from 'react'
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
                <i className="material-icons account-circle">account_circle</i>
                <Row>
                    <Col xs={2} className="dashboard-sidebar">
                        <ul className="sidebar-items">
                            <li>Dashboard</li>
                            <li>Tansactions</li>
                            <li>Crypto Watch</li>
                        </ul>
                    </Col>
                    <Col xs={10}>
                    <h1>Dashboard</h1>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard
