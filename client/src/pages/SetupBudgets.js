import React, { Component } from 'react'
import axios from "axios";
import setAuthToken from "../utils/setAuthtoken";

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
              user: response.data
            });
          })
          .catch(err => console.log(err.response));
      }
    render() {
        return (
            <div>
                <h1>set up budgets</h1>
            </div>
        )
    }
}

export default SetupBudgets
