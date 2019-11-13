import React, { Component } from "react";
import axios from "axios";
import setAuthToken from "../utils/setAuthtoken";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class Budgets extends Component {
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
          // console.log(currentCategory, this.state.transactions[i].amount)
          // console.log(currentSpent)
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

  //   setTransaction() {
  //     // for (let i = 0; i < this.state.transactions.length; i++) {
  //     //     let currentCategory = this.state.transactions[i].category;
  //     //     console.log(currentCategory)
  //     //     console.log(this.state[currentCategory])
  //     //     this.setState({
  //     //             [currentCategory]:{
  //     //             spent:"30000"
  //     //         }
  //     //     })

  //     //   }
  //   }

  render() {
    return (
      <div>
        <h3>Budgets</h3>
        <hr />
        <Row>
          <Col xs={3}>Food</Col>
          <Col xs={3}>{this.state.food.spent}</Col>
          <Col xs={3}>{this.state.food.remaining}</Col>
          <Col xs={3}>{this.state.food.limit}</Col>
        </Row>
        
      </div>
    );
  }
}

export default Budgets;
