import React, { Component } from "react";
import authenticate from "../utils/Authenticate";
import setAuthToken from "../utils/setAuthtoken";
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
      .catch(err => console.log(err))

      setTimeout(() => {
        const token = localStorage.getItem('example-app');

      axios.post("/api/user/login", newUser)
        .then(response =>{

          if (response.data.token){
            const {token} = response.data;

            localStorage.setItem('example-app', token);
            setAuthToken(token);
          }
          this.setState({
            redirect: true,
            errors: {}
          })
        })
        .catch(err => 
                this.setState({
                    errors: err.response.data
                })
            )
      }, 300);
      
  };

  render() {
    const styles = {
      nav: {
        boxShadow: "10px"
      },
      
      button: {
        marginLeft: 5
      }
    };
    if(this.state.redirect){
      return <Redirect to="/setup-budgets"/>
    }
    return (
      <div className="login-signup">
        {/* NAVBAR */}
        <Navbar expand="lg" bg="transparent" variant="dark" className="shadow mobile-green">
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
            </p>
            <p>
              Already have an account? <Link to="login" style={{color: "#00CF60"}}><span>Log In!</span></Link>
            </p>
            <Link to="/login">          
              <Button
              variant="outline-success"
              className="button-white"
              style={styles.button}
            >
              Log In
              </Button>
              </Link>
          </Col>

          {/* RIGHT SECTION */}
          <Col xs={12} md={8} className="right-section">
            <Container>
            <Form onSubmit={this.onSubmit}>
              <Row>
                <Col xs={6} md={6}>
                  <Form.Control type="text" placeholder="First name" name="firstName" onChange={this.onChange} />
                </Col>
                <Col xs={6} md={6}>
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
              <Button className="button-green" type="submit">
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
