import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container"

export class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    redirect: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("api/user", newUser)
      .then(console.log(newUser))
      .catch(err => console.log(err));

      this.setState({
        redirect: true
      })
  };

  render() {
    const styles = {
      nav: {
        boxShadow: "10px"
      },
      brand: {
        color: "#00CF60"
      },
      button: {
        marginLeft: 5
      }
    };
    if(this.state.redirect){
      return <Redirect to="/new-user-budgets"/>
    }
    return (
      <div>
        {/* NAVBAR */}
        <Navbar expand="lg" bg="transparent" variant="dark" className="shadow ">
          <Link to="/">
            <Navbar.Brand style={styles.brand}>Budget Master</Navbar.Brand>
          </Link>
          <Nav className="mr-auto"></Nav>
          <Link to="/login">
            <Button
              variant="outline-success"
              className="button-white"
              style={styles.button}
            >
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              variant="outline-success"
              className="button-white"
              style={styles.button}
            >
              Sign Up
            </Button>
          </Link>
        </Navbar>

        {/* LEFT SECTION */}
        <Row>
          <Col xs={12} md={4} className="left-section">
            <h2>Sign Up</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p>
              Already have an account? <span>Log In!</span>
            </p>
            <Button
              variant="outline-success"
              className="button-white"
              style={styles.button}
            >
              Login
            </Button>
          </Col>

          {/* RIGHT SECTION */}
          <Col xs={12} md={8} className="right-section">
            <Container>
            <Form onSubmit={this.onSubmit}>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Control type="text" placeholder="First name" name="firstName" onChange={this.onChange} />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Control type="text" placeholder="Last name" name="lastName" onChange={this.onChange} />
                </Col>
              </Row>
              <br/>
              <Row>
                <Col xs={12}>
                  <Form.Control type="email" placeholder="Email" name="email" onChange={this.onChange} />
                </Col>
              </Row>
              <br/>
              <Row>
                <Col xs={12}>
                  <Form.Control type="password" placeholder="Password" name="password" onChange={this.onChange} />
                </Col>
              </Row>
            <br/>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SignUp;
