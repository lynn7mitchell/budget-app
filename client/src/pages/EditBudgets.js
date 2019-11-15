import React, { Component } from "react";
import { Link } from "react-router-dom";
import setAuthToken from "../utils/setAuthtoken";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/table";

export class EditBudgets extends Component {
  state = {
    user: {},
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
          transactions: response.data.transactions
        });
        for (let i = 0; i < this.state.transactions.length; i++) {
          let currentCategory = this.state.transactions[
            i
          ].category.toLowerCase();
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
          console.log(this.state[currentCategory]);
        }

        console.log(this.state.transactions.length);
      })
      .catch(err => console.log(err.response));
  }

  onSubmit = e =>{
     const newBudget = {

      }
  }
  render() {
    return (
      <Form>
        <Container>
          <Row>
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
                  <td>
                    <Form.Control
                      type="number"
                      step="0.01"
                      value={this.state.food.limit}
                      name="amount"
                      onChange={this.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Transportation</td>
                  <td>{this.state.transportation.spent}</td>
                  <td>{this.state.transportation.remaining}</td>
                  <td>
                  <Form.Control
                      type="number"
                      step="0.01"
                      value={this.state.transportation.limit}
                      name="amount"
                      onChange={this.onChange}
                    />
                    </td>
                </tr>
                <tr>
                  <td>Lifestyle</td>
                  <td>{this.state.lifestyle.spent}</td>
                  <td>{this.state.lifestyle.remaining}</td>
                  <td>
                  <Form.Control
                      type="number"
                      step="0.01"
                      value={this.state.lifestyle.limit}
                      name="amount"
                      onChange={this.onChange}
                    />
                    </td>
                </tr>
                <tr>
                  <td>Housing</td>
                  <td>{this.state.housing.spent}</td>
                  <td>{this.state.housing.remaining}</td>
                  <td>
                  <Form.Control
                      type="number"
                      step="0.01"
                      value={this.state.housing.limit}
                      name="amount"
                      onChange={this.onChange}
                    />
                    </td>
                </tr>
                <tr>
                  <td>Debt</td>
                  <td>{this.state.debt.spent}</td>
                  <td>{this.state.debt.remaining}</td>
                  <td>
                  <Form.Control
                      type="number"
                      step="0.01"
                      value={this.state.debt.limit}
                      name="amount"
                      onChange={this.onChange}
                    />
                      </td>
                </tr>
                <tr>
                  <td>Insurance</td>
                  <td>{this.state.insurance.spent}</td>
                  <td>{this.state.insurance.remaining}</td>
                  <td>
                  <Form.Control
                      type="number"
                      step="0.01"
                      value={this.state.insurance.limit}
                      name="amount"
                      onChange={this.onChange}
                    />
                    </td>
                </tr>
                <tr>
                  <td>Savings</td>
                  <td>{this.state.savings.spent}</td>
                  <td>{this.state.savings.remaining}</td>
                  <td>
                  <Form.Control
                      type="number"
                      step="0.01"
                      value={this.state.savings.limit}
                      name="amount"
                      onChange={this.onChange}
                    />
                      </td>
                </tr>
                <tr>
                  <td>Fun</td>
                  <td>{this.state.fun.spent}</td>
                  <td>{this.state.fun.remaining}</td>
                  <td>
                  <Form.Control
                      type="number"
                      step="0.01"
                      value={this.state.fun.limit}
                      name="amount"
                      onChange={this.onChange}
                    />
                    </td>
                </tr>
              </tbody>
            </Table>
            <Button variant="success" type="submit">
            Submit
          </Button>
          </Row>
        </Container>
      </Form>
    );
  }
}

export default EditBudgets;
