import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import Navbar from "./basic/Navbar"
import axios from "axios";

export class CreateAnnouncement extends Component {
  state = {
    title: "",
    info: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newAnnouncement = {
      title: this.state.title,
      info: this.state.info
    };

    axios
      .post("api/announcements", newAnnouncement)
      .then(
        alert("Announcement Posted")
        
        )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Navbar />

        <h3 className="subheader">Create an Announcement</h3>

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
            <div className=" input-field col s12">
              <textarea
                onChange={this.onChange}
                value={this.state.info}
                name="info"
                id="info"
                className="materialize-textarea"
              ></textarea>
              <label htmlFor="info">Info</label>
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

export default CreateAnnouncement;
