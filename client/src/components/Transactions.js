import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import setAuthToken from "../utils/setAuthtoken";
import Moment from "react-moment";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export class Transactions extends Component {
    
    state = {
        user: {},
        transactions: []
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
              user: response.data,
              transactions: response.data.transactions
            });
          })
          .catch(err => console.log(err.response));
      }

    render() {

        return (
            <div>
                <h3>Transactions</h3>
                <hr/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.transactions.map(transaction =>
                            <tr>
                                <td><Moment format="MM/DD/YYYY">{transaction.date}</Moment></td>
                                <td>{transaction.description}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.amount}</td>
                            </tr>
                            )}
                    </tbody>
                </Table>
                <Link to="add-transaction"><Button variant="success">Add Transaction</Button></Link>
            </div>
        )
    }
}

export default Transactions
