import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

export class SignUp extends Component {



  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }


  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }


    axios.post('api/user', newUser)
      .then(console.log(newUser))
      .catch(err => console.log(err))
  }

  render() {
    const styles = {
      nav:{
        boxShadow: "10px"
      },
     brand:{
       color: "#00CF60"
     }

      }
    return (
      <div>
        {/* NAVBAR */}
        <Navbar expand="lg" bg="transparent" variant="dark" className="shadow ">
         <Link to="/" ><Navbar.Brand style={styles.brand}>Budget Master</Navbar.Brand></Link>
          <Nav className="mr-auto">
          </Nav>
          <Link to="/login" >
            <Button variant="outline-success" className="button-white" style={styles.button}>Login</Button>
          </Link>
          <Link to="/signup" >
            <Button variant="outline-success" className="button-white" style={styles.button}>Sign Up</Button>
          </Link>
        </Navbar>

        {/* LEFT SECTION */}
        <Row>
          <Col xs={12} md={4} className="left-section">
          <h2>Sign Up</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <p>Already have an account? <span>Log In!</span></p>
            <Button variant="outline-success" className="button-white" style={styles.button}>Login</Button>

          </Col>
        </Row>
      </div>
    );
  }
}

export default SignUp;
