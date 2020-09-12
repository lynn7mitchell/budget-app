import React from "react";
import {
  Button,
  Typography,
  Grid,
  MuiTextField,
  Card,
  CardContent,
} from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Barchart from "@material-ui/icons/BarChart";
import Phonelink from "@material-ui/icons/Phonelink";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  headerBackgroundColor: {
    background: "#4CAF50",
    height: "45vh",
  },
  headerText:{
    paddingLeft: '15px',
    color: '#fff'
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    marginTop: "1em",
    padding: '1em'
  },
  icon: {
    fontSize: "100px",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.headerBackgroundColor}
      >
        <div className="header-text">
          <Typography variant="h2" color="primary.contrastText" className={classes.headerText}>
            Budget Master
          </Typography>
          <Typography variant="subtitle" color="primary.contrastText" className={classes.headerText}>
            Take back control of your money and master your budget with Budget
            Master
          </Typography>
        </div>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        <Grid item className={classes.cards} xs={12} md={4}>
          <Barchart
            color="secondary"
            elementType="text"
            className={classes.icon}
          />
          <Typography variant="h4" align="center">
            Add Your Budgets
          </Typography>
          <Typography variant="paragraph" align="center">
            Budget Master sets up your budgets by category to make them easy to
            track.
          </Typography>
        </Grid>
        <Grid item className={classes.cards} xs={12} md={4}>
          <AttachMoneyIcon
            color="secondary"
            elementType="text"
            className={classes.icon}
          />
          <Typography variant="h4" >
            Add transactions
          </Typography>
          <Typography variant="paragraph" align="center">
            Budget Master is fully Responsive so it will work on any of your
            smartphones, tablets, laptops, or desktops.
          </Typography>
        </Grid>

        <Grid item className={classes.cards} align="center" xs={12} md={4}>
          <Phonelink
            color="secondary"
            elementType="text"
            className={classes.icon}
          />
          <Typography variant="h4" align="center">
            Fully Responsive
          </Typography>
          <Typography variant="paragraph" align="center">
            Budget Master is fully Responsive so it will work on any of your
            smartphones, tablets, laptops, or desktops.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
