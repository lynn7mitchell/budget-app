import React, { Component } from 'react'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class AddTransaction extends Component {
    
    render() {
        return (
            <Container>
            <Form onSubmit={this.onSubmit}>
              <Row>
                <Col xs={12}>
                <Form.Label>Amount</Form.Label>
                  <Form.Control type="text" placeholder="Amount" name="amount" onChange={this.onChange} />
                </Col>
              </Row>
              <br/>
              <Row>
                <Col xs={12}>
                <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Description" name="description" onChange={this.onChange} />
                </Col>
              </Row>
              <br/>

              <Row>
                <Col xs={12}>
                <Form.Label>Category</Form.Label>
                  <Form.Control  as="select">
                      <option>Food</option>
                      <option>Transportation</option>
                      <option>Lifestyle</option>
                      <option>Housing</option>
                      <option>Debt</option>
                      <option>Insurance</option>
                      <option>Savings</option>
                      <option>Fun</option>
                  </Form.Control>
                </Col>
              </Row>
              <br/>

              <Row>
                <Col xs={12}>
                  <Form.Label>Date</Form.Label>
                  <Row>
                    <Col xs={6}>
                    <Form.Control  as="select">
                      <option>Food</option>
                      <option>Transportation</option>
                      <option>Lifestyle</option>
                      <option>Housing</option>
                      <option>Debt</option>
                      <option>Insurance</option>
                      <option>Savings</option>
                      <option>Fun</option>
                  </Form.Control>
                    </Col>
                    <Col xs={6}>
                    <Form.Control  as="select">
                      <option>Food</option>
                      <option>Transportation</option>
                      <option>Lifestyle</option>
                      <option>Housing</option>
                      <option>Debt</option>
                      <option>Insurance</option>
                      <option>Savings</option>
                      <option>Fun</option>
                  </Form.Control>
                    </Col>
                  </Row>
                </Col>
              </Row>
            <br/>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
            </Container>
        )
    }
}

export default AddTransaction
