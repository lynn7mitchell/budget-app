import React, { Component } from "react";
import { Checkbox } from "material-ui";

export class AdminSwitch extends Component {
  componentDidMount() {
      document.getElementById("checkbox").checked = true
  }
  
  render(isAdmin) {
    let styles;

    if (isAdmin === false) {
      styles = {
        display: "none"
      };
    
    }
    styles={
        position: "absolute",
        bottom: 0,
        right: 0,
    }
   
    return (
      <div>
        <div className="switch" styles={this.styles}>
          <label>
            Off
            <input type="checkbox" id="checkbox" onChange={this.onChange} />
            <span className="lever"></span>
            On
          </label>
        </div>
      </div>
    );
  }
}

export default AdminSwitch;
