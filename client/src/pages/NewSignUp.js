import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import authenticate from "../utils/Authenticate";
import setAuthToken from "../utils/setAuthtoken";
import {
  Button,
  Typography,
  Grid,
  MuiTextField,
  Card,
  CardContent,
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import {
  fieldToTextField,
  TextField,
  TextFieldProps,
  Select,
  Switch,
} from "formik-material-ui";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/styles";
const styles = makeStyles({
  formCard: {
    margin: "0 auto",
    // height: '75%',
    marginTop: "2rem",
    // width: "40%",
  },
  formField: {
    width: "60%",
    marginBottom: "24px",
  },
});
export default function NewSignUp() {
  const classes = styles();

  const [redirect, setRedirect] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("example-app");

    if (authenticate(token)) {
      setRedirect(true);
    }
  }, []);

  const onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

 
  if(redirect === true){
    return <Redirect to="/dashboard"/>
  }
  return (
    <div>
      <Navbar />

      <Formik
      initialValues={{
        firstName: '',
        lastName: '',
      email: "",
      password: "",
    }}
    validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    }}
    onSubmit={(values) => {
     

      const newUser = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password
      };
      const logInInfo={
        email: values.email,
        password: values.password
      }
  
      axios
        .post("api/user", newUser)
        .then(
            setTimeout(() => {
                const token = localStorage.getItem('example-app');
        
              axios.post("/api/user/login", logInInfo)
                .then(response =>{
        
                  if (response.data.token){
                    const {token} = response.data;
        
                    localStorage.setItem('example-app', token);
                    setAuthToken(token);
                  }
                  setRedirect(true)
                  setFormErrors({})
                  
                })
                .catch(err => 
                  setFormErrors(err.response.data)
                        
                    )
              }, 500)
        
        )
        .catch(err => console.log(err))}}
  
        
      >
        
        {({ submitForm, isSubmitting }) => (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <Card className={classes.formCard}>
                <CardContent>
                  <Form>
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                    >
                      <Typography variant="h3">Sign Up</Typography>
                      <Field
                        component={TextField}
                        name="firstName"
                        type="firstName"
                        label="First Name"
                        className={classes.formField}
                      />
                      <Field
                        component={TextField}
                        name="lastName"
                        type="lastName"
                        label="Last Name"
                        className={classes.formField}
                      />
                      <Field
                        component={TextField}
                        name="email"
                        type="email"
                        label="Email"
                        className={classes.formField}
                      />
                        {formErrors.email && <div>{formErrors.email}</div>}


                      <Field
                        component={TextField}
                        type="password"
                        label="Password"
                        name="password"
                        className={classes.formField}
                      />
                        {formErrors.password && <div>{formErrors.password}</div>}

                      <Button
                        variant="contained"
                        color="primary"
                        onClick={submitForm}
                        size="large"
                        fullWidth="true"
                        className={classes.formField}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Formik>
    </div>
  );
}
