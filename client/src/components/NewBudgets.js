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
export default function NewBudgets() {
  const [user, setUser] = useState({});
  const [transactions, setTransactions] = useState([])
  const [budgets, setBudgets] = useState([]);
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
        let newBudgets = [
          {
            category: 'Food',
            spent: 0,
            remaining: res.data.budgets.food.toFixed(2),
            limit: res.data.budgets.food,
          },
          {
            category: 'Transportation',
            spent: 0,
            remaining: res.data.budgets.transportation.toFixed(2),
            limit: res.data.budgets.transportation,
          },
          {
            category: 'Lifestyle',
            spent: 0,
            remaining: res.data.budgets.lifestyle.toFixed(2),
            limit: res.data.budgets.lifestyle,
          },
          {
            category: 'Housing',
            spent: 0,
            remaining: res.data.budgets.housing.toFixed(2),
            limit: res.data.budgets.housing,
          },
          {
            category: 'Debt',
            spent: 0,
            remaining: res.data.budgets.debt.toFixed(2),
            limit: res.data.budgets.debt,
          },
          {
            category: 'Insurance',
            spent: 0,
            remaining: res.data.budgets.insurance.toFixed(2),
            limit: res.data.budgets.insurance,
          },
          {
            category: 'Savings',
            spent: 0,
            remaining: res.data.budgets.savings.toFixed(2),
            limit: res.data.budgets.savings,
          },
          {
            category: 'Fun',
            spent: 0,
            remaining: res.data.budgets.fun.toFixed(2),
            limit: res.data.budgets.fun,
          },
        ];
        let currentCategory
        let currentSpent
        let currentLimit
        let currentRemaining
        console.log(newBudgets)
        for (let j = 0; newBudgets.length; j++){
          for (let i = 0; i < res.data.transactions.length; i++) {
            let currentCategory = res.data.transactions[i].category.toLowerCase()
            if(newBudgets[j].category.toLowerCase() === currentCategory){
              newBudgets[j].spent = newBudgets[j].spent + parseFloat(res.data.transactions[i].amount)
              newBudgets[j].remaining = parseFloat(newBudgets[j].limit - newBudgets[j].spent).toFixed(2)
              setBudgets(newBudgets)
            
            }
       }
     
      


      }
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
            <TableCell>Category</TableCell>
            <TableCell>Spent</TableCell>
            <TableCell>Remaining</TableCell>
            <TableCell>Limit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {budgets.map((budget) => (
            <TableRow key={uuid()}>
              <TableCell align="left">{budget.category}</TableCell>
              <TableCell align="left">{budget.spent}</TableCell>
              <TableCell align="left">{budget.remaining}</TableCell>
              <TableCell align="left">{budget.limit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
