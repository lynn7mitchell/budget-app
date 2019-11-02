import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import axios from "axios";
import setAuthToken from "../utils/setAuthtoken";
import Tabs from "../components/basic/Tabs";
import Navbar from "../components/basic/Navbar";
export class Home extends Component {
  state = {
    redirect: false,
    user: {},
    isAdmin: false
  };

  componentDidMount() {
   

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



  render() {
    

    const styles = {
      logo: {
        display: "block",
        margin: "0 auto",
        width: "50vw"
      },
      addAnnouncement:{
        
      }
    };

    if(!this.state.isAdmin){
      styles.addAnnouncement = {
        display: "none"
      }
    }
    

    return (
      <div>       


        <Navbar />

        <img src={Logo} style={styles.logo} className="logo" />
        <Tabs />
        <Link to="/createannouncement">
          <i className="material-icons small add-event-icon" style={styles.addAnnouncement}>
            add_circle_outline
          </i>
        </Link>
      </div>
    );
  }
}

export default Home;
