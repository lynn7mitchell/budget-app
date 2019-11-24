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
import Container from "react-bootstrap/Container"

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
            <h2>Log In</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </p>
            <p>
              Don't have an account? <Link to="signup" style={{color: "#00CF60"}}><span>Sign Up!</span></Link>
            </p>
            <Link to="/signup">          
              <Button
              variant="outline-success"
              className="button-white"
              style={styles.button}
            >
              Sign Up
            </Button>
            </Link>
          </Col>

          {/* RIGHT SECTION */}
          <Col xs={12} md={8} className="right-section">
<Container>
            <Form onSubmit={this.onSubmit}>
              <Row>

                <Col xs={12}>
                  <p>Demo Login <br/>email: test@gmail.com<br/>   password: test</p>
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

export default Login;
