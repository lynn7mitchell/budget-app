import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import setAuthToken from "../utils/setAuthtoken";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export class Budgets extends Component {
  state = {
    user: {},
    budgets: {},
    transactions: [],
    food: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    transportation: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    lifestyle: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    housing: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    debt: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    insurance: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    savings: {
      spent: 0,
      remaining: 0,
      limit: 0
    },
    fun: {
      spent: 0,
      remaining: 0,
      limit: 0
    }
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
          budgets: response.data.budgets,
          transactions: response.data.transactions,
          food:{
            spent: 0,
            remaining: 0,
            limit: response.data.budgets.food
          },
          transportation: {
            spent: 0,
            remaining: 0,
            limit: response.data.budgets.transportation
          },
          lifestyle: {
            spent: 0,
            remaining: 0,
            limit: response.data.budgets.lifestyle
          },
          housing: {
            spent: 0,
            remaining: 0,
            limit: response.data.budgets.housing
          },
          debt: {
            spent: 0,
            remaining: 0,
            limit: response.data.budgets.debt
          },
          insurance: {
            spent: 0,
            remaining: 0,
            limit: response.data.budgets.insurance
          },
          savings: {
            spent: 0,
            remaining: 0,
            limit: response.data.budgets.savings
          },
          fun: {
            spent: 0,
            remaining: 0,
            limit: response.data.budgets.fun
          },
        });
        console.log(this.state.transactions.length)
        for (let i = 0; i < this.state.transactions.length; i++) {
          let currentCategory = this.state.transactions[
            i
          ].category.toLowerCase();
          console.table(this.state.transactions.length)
          let currentSpent =
            this.state[currentCategory].spent +
            parseFloat(this.state.transactions[i].amount);
          let currentLimit = this.state.budgets[currentCategory];
          let currentRemaining = currentLimit - currentSpent;
          console.log(currentRemaining);
          this.setState({
            [currentCategory]: {
              spent: currentSpent,
              limit: currentLimit,
              remaining: currentRemaining
            }
          });
          // console.log(this.state[currentCategory]);
          console.log(i)
        }

        console.log(this.state.transactions.length);
      })
      .catch(err => console.log(err.response));
  }

  render() {
    return (
      <div>
        <h3>Budgets</h3>
        <hr />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Category</th>
              <th>Spent</th>
              <th>Remaining</th>
              <th>Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Food</td>
              <td>{this.state.food.spent}</td>
              <td>{this.state.food.remaining}</td>
              <td>{this.state.food.limit}</td>
            </tr>
            <tr>
              <td>Transportation</td>
              <td>{this.state.transportation.spent}</td>
              <td>{this.state.transportation.remaining}</td>
              <td>{this.state.transportation.limit}</td>
            </tr>
            <tr>
              <td>Lifestyle</td>
              <td>{this.state.lifestyle.spent}</td>
              <td>{this.state.lifestyle.remaining}</td>
              <td>{this.state.lifestyle.limit}</td>
            </tr>
            <tr>
              <td>Housing</td>
              <td>{this.state.housing.spent}</td>
              <td>{this.state.housing.remaining}</td>
              <td>{this.state.housing.limit}</td>
            </tr>
            <tr>
              <td>Debt</td>
              <td>{this.state.debt.spent}</td>
              <td>{this.state.debt.remaining}</td>
              <td>{this.state.debt.limit}</td>
            </tr>
            <tr>
              <td>Insurance</td>
              <td>{this.state.insurance.spent}</td>
              <td>{this.state.insurance.remaining}</td>
              <td>{this.state.insurance.limit}</td>
            </tr>
            <tr>
              <td>Savings</td>
              <td>{this.state.savings.spent}</td>
              <td>{this.state.savings.remaining}</td>
              <td>{this.state.savings.limit}</td>
            </tr>
            <tr>
              <td>Fun</td>
              <td>{this.state.fun.spent}</td>
              <td>{this.state.fun.remaining}</td>
              <td>{this.state.fun.limit}</td>
            </tr>
          </tbody>
        </Table>
        <Link to="edit-budgets">
          <Button variant="success">Edit Budgets</Button>
        </Link>
      </div>
    );
  }
}

export default Budgets;
