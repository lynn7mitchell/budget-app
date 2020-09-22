import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  buttonContainer: {
    marginLeft: "auto",
    display: "flex",
    justifyItems: "space-around",
  },
  buttonMargin: {
    marginRight: ".5rem",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Budget Master</Typography>
        {/* <AttachMoneyIcon className={classes.typographyStyles} /> */}
        <div className={classes.buttonContainer}>
          <Link to="/newlogin">
            <Button
              variant="contained"
              color="secondary"
              className={classes.buttonMargin}
            >
              Login
            </Button>
          </Link>
          <Link to="/newsignup">
            <Button variant="contained" color="secondary">
              SignUp
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
