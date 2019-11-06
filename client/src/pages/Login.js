import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom"
import axios from "axios"
import authenticate from "../utils/Authenticate";
import setAuthToken from "../utils/setAuthtoken";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export class Login extends Component {

    constructor(){
        super();
        this.state={
            redirect: false,
            email: "",
            password: "",
            errors:{}
        }
    }
    componentDidMount(){
      const token = localStorage.getItem('example-app');

      if(authenticate(token)){
        this.setState({
          redirect: true
        })
      }
    }

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e =>{
        e.preventDefault();

        const newUser={
            email: this.state.email,
            password: this.state.password
        }

      

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
    }
  render() {
   
    const styles = {
      nav: {
        boxShadow: "10px"
      },
      brand: {
        color: "#00CF60"
      },
        error:{
          color: "#cc0000",
          fontSize: "0.8rem",
          margin: 0,
          
        },
        button: {
          marginLeft: 5
        }
        
    };

    const {errors} = this.state;

    if(this.state.redirect){
      return <Redirect to="/dashboard"/>
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

            <Form onSubmit={this.onSubmit}>
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
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
