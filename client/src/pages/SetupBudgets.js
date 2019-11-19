import React, { Component } from 'react'
import axios from "axios";
import setAuthToken from "../utils/setAuthtoken";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"

export class SetupBudgets extends Component {
    state = {
        user: {},
        redirect: false
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
              food: response.data.budgets.food,
              transportation: response.data.budgets.transportation,
              lifestyle: response.data.budgets.lifestyle,
              housing: response.data.budgets.housing,
              debt: response.data.budgets.debt,
              insurance: response.data.budgets.insurance,
              savings: response.data.budgets.savings,
              fun: response.data.budgets.fun
            });
          })
          .catch(err => console.log(err.response));
      }

      onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      onSubmit = e => {
        e.preventDefault();

        let newBudgets={
              food: this.state.food,
              transportation: this.state.transportation,
              lifestyle: this.state.lifestyle,
              housing: this.state.housing,
              debt: this.state.debt,
              insurance: this.state.insurance,
              savings: this.state.savings,
              fun: this.state.fun
        }
        console.log(newBudgets)

      axios
      .put("api/user/budgets", newBudgets)
      .then(console.log(newBudgets))
      .catch(err => console.log(err));

    alert("Budgets Updated");
      }
    render() {
      console.log(this.state.user)
        return (
            <div>
                <h1>Setup Your Budgets</h1>
                <Container>
                <Form onSubmit={this.onSubmit}>
              <Row>
                <Col xs={12}>
                  <Form.Label>Food</Form.Label>
                  <Form.Control type="number" placeholder={this.state.food} name="food" onChange={this.onChange} step="0.01"/>
                </Col>
              </Row>
              <br/>
              <Row>
              <Col xs={12}>
                  <Form.Label>Transportation</Form.Label>
                  <Form.Control type="number" placeholder={this.state.transportation} name="transportation" onChange={this.onChange} step="0.01"/>
                </Col>
              </Row>
              <br/>
              <Row>
              <Col xs={12}>
                  <Form.Label>Lifestyle</Form.Label>
                  <Form.Control type="number" placeholder={this.state.lifestyle} name="lifestyle" onChange={this.onChange} step="0.01"/>
                </Col>
              </Row>
            <br/>
            <Row>
              <Col xs={12}>
                  <Form.Label>Housing</Form.Label>
                  <Form.Control type="number" placeholder={this.state.housing} name="housing" onChange={this.onChange} step="0.01"/>
                </Col>
              </Row>
            <br/>
            <Row>
              <Col xs={12}>
                  <Form.Label>Debt</Form.Label>
                  <Form.Control type="number" placeholder={this.state.debt} name="debt" onChange={this.onChange} step="0.01"/>
                </Col>
              </Row>
            <br/>
            <Row>
              <Col xs={12}>
                  <Form.Label>Insurance</Form.Label>
                  <Form.Control type="number" placeholder={this.state.insurance} name="insurance" onChange={this.onChange} step="0.01"/>
                </Col>
              </Row>
            <br/>
            <Row>
              <Col xs={12}>
                  <Form.Label>Savings</Form.Label>
                  <Form.Control type="number" placeholder={this.state.savings} name="savings" onChange={this.onChange} step="0.01"/>
                </Col>
              </Row>
            <br/>
            <Row>
              <Col xs={12}>
                  <Form.Label>Fun</Form.Label>
                  <Form.Control type="number" placeholder={this.state.fun} name="fun" onChange={this.onChange} step="0.01"/>
                </Col>
              </Row>
            <br/>
              <Button className="button-green" type="submit">
                Submit
              </Button>
            </Form>
            </Container>
            </div>
        )
    }
}

export default SetupBudgets
