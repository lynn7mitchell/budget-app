import React, { Component, useState } from "react";
import axios from 'axios'
import setAuthToken from "../utils/setAuthtoken";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./basic/Navbar"
import { getTime } from "date-fns/esm";

export class CreateEvent extends Component {
  state = {
    title: "",
    locationName: "",
    locationAddress: "",
    time: new Date(),
    startDate: new Date(),
    note: "",
    user:{}
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
      })
      .catch(err => console.log(err.response));
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onDateChange = date => {
    this.setState({
      startDate: date
    });
  };
  onTimeChange = date => {
    this.setState({
      time: date
    });
  };

  onSubmit = e =>{
    e.preventDefault();

    const newEvent = {
      creator: this.state.user.firstName + " " + this.state.user.lastName,
      date: this.state.startDate,
      title: this.state.title,
      locationName: this.state.locationName,
      locationAddress: this.state.locationAddress,
      time: this.state.time,
      note: this.state.note
    }

    axios.post('api/events', newEvent)
    .then(
      alert("Event Created!")
    )
    .catch(err => console.log(err))

  }
  render() {
    return (
      <div>
                <Navbar />

        <h3 className="subheader">Create an Event</h3>

        <div className="container">
          <form className="col s12" onSubmit={this.onSubmit}>
            <div className="row">
              <div className=" input-field col s12">
                <input
                  id="title"
                  type="text"
                  className="validate"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                />
                <label htmlFor="title">Title</label>
              </div>
            </div>
            <div className="row">
              <div className=" input-field col s6">
                <div>
                  <label>Select Date</label>
                  <DatePicker
                    showYearDropdown
                    selected={this.state.startDate}
                    onChange={this.onDateChange}
                  />
                </div>
              </div>
              <div className=" input-field col s6">
                <div>
                  <label>Select Time</label>
                  <DatePicker
                    selected={this.state.time}
                    onChange={this.onTimeChange}
                    showTimeSelect
                    showTimeSelectOnly
                    dateFormat="h:mm aa"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className=" input-field col s12">
                <input
                  id="locationName"
                  type="text"
                  className="validate"
                  name="locationName"
                  value={this.state.locationName}
                  onChange={this.onChange}
                />
                <label htmlFor="title">Place (name)</label>
              </div>
            </div>
            <div className="row">
              <div className=" input-field col s12">
                <input
                  id="locationAddress"
                  type="text"
                  className="validate"
                  name="locationAddress"
                  value={this.state.locationAddress}
                  onChange={this.onChange}
                />
                <label htmlFor="title">Address</label>
              </div>
            </div>
            <div className="row">
              <div className=" input-field col s12"></div>
            </div>
            <div className="row">
              <div className=" input-field col s12">
                <textarea
                  onChange={this.onChange}
                  value={this.state.note}
                  name="note"
                  id="note"
                  className="materialize-textarea"
                ></textarea>
                <label htmlFor="note">Note</label>
              </div>
            </div>
            <div className="row">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
