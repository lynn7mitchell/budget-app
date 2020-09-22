import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import axios from "axios";
import setAuthToken from "../utils/setAuthtoken";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
export default function NewTransactions() {
  const [user, setUser] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setTransactions(res.data.transactions);
      })
      .then(setLoading(false))
      .catch((err) => console.log(err.response));
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <TableContainer component={Paper}>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.map((transaction) => (
            <TableRow key={transaction._id}>
              <TableCell align="left">{transaction.date}</TableCell>
              <TableCell align="left">{transaction.description}</TableCell>
              <TableCell align="left">{transaction.category}</TableCell>
              <TableCell align="left">{transaction.amount}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
    </TableContainer>
  );
}
