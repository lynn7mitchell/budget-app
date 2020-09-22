import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import setAuthToken from "../utils/setAuthtoken";
import SideBar from "../components/SideBar";
import Transactions from "../components/NewTransactions";
import {
  Button,
  Typography,
  Grid,
  MuiTextField,
  Card,
  CardContent,
} from "@material-ui/core";
export default function NewDash() {
  const [user, setUser] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // gets the bearer token to validate the user that is logged in
    const token = localStorage.getItem("example-app");

    if (token) {
      setAuthToken(token);
    }

    // /api/user grabs the current logged on user's info
    axios
      .get("/api/user")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err.response));
      setLoading(false)
  }, []);

  //   if there isn't a user then the page will redirect to home
  if (redirect) {
    return <Redirect to="/" />;
  }else if(loading){
      return <h1>Loading...</h1>
  }

  return (
    <div>
      <Grid container direction="row" justify='space-evenly'>
        <Grid item>
          <SideBar user={user} />
        </Grid>
        <Grid item>
          <Transactions/>
        </Grid>
      </Grid>
    </div>
  );
}
