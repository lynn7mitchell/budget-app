import React, { Component } from "react";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import axios from "axios";
import setAuthToken from "../../utils/setAuthtoken";
import MenuOpen from "../../images/menu-open.svg";
import {SideNav, SideNavItem, Button} from "react-materialize";
import AdminSwitch from "./AdminSwitch";
// import Button from "./Button"
export class Navbar extends Component {
  state = {
    redirect: false,
    user: {},
    isAdmin: false,
    displayAdmin: true
  };

  componentDidMount() {
    const token = localStorage.getItem("example-app");
    if (token) {
      setAuthToken(token);
    }

    axios
      .get("api/user")
      .then(response => {
        this.setState({
          user: response.data
        });
        if (this.state.user.role === "admin") {
          this.setState({
            isAdmin: true
          });
        }
      })
      .catch(err => console.log(err.response));
  }
  handleLogout = () => {
    localStorage.removeItem("example-app");
    this.setState({
      redirect: true
    });
  };

  render() {
    const style = {
      menu: {
        marginLeft: "10px",
        marginTop: "5%",
        width: "3vh"
      },
      center: {
        display: "flex",
        alignItems: "center",
        justifyItems: "center"
      },
      navMainIcon: {
        color: "#333",
        margin: "0 auto"
      },
      welcome: {
        marginLeft: "25px"
      },
      button:{
             marginLeft: "10px",
              marginTop: "5%",
              width: "3vh",
              background: "transparent",
              boxShadow: "none"
      },
      color:{
        color: "#000"
      }
    };
    const { redirect, user } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    // const adminSwitch = () =>{
    //   if(this.state.isAdmin){
    //     return <AdminSwitch isAdmin = {this.state.isAdmin}/>
    //   }
    // }

    return (
      <div>
        <SideNav trigger={<Button style={style.button}><i className="material-icons" style={style.color}>menu</i></Button>} options={{closeOnClick: true}}>

        {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <img src={MenuOpen} alt="menu-open-toggle" style={style.menu} />
        </a> */}

          <SideNavItem style={style.center}>
            
          </SideNavItem>
          <SideNavItem >
            <h6 style={style.welcome}>
              {" "}
              <strong>Welcome, {this.state.user.firstName}</strong>{" "}
            </h6>
          </SideNavItem>
          <hr />
          <SideNavItem href="/home">
            Home
          </SideNavItem>
          <SideNavItem href="/events">
            Events
          </SideNavItem>
          <SideNavItem>
            <Link onClick={this.handleLogout}>Log Out</Link>
          </SideNavItem>
          {/* {adminSwitch()} */}

        <div>
          <div></div>
        </div>
        </SideNav>
      </div>
    );
  }
}

export default Navbar;
