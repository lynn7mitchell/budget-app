import React, { Component } from "react";
import Moment from "react-moment";
import API from "../../utils/API";
import axios from "axios"


export class EventCard extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    API.getEvents()
      .then(res => this.setState({ events: res.data }))
      .catch(err => console.log(err.data));
  }
  onClick = e => {
    const id = e.target.id;
    axios
      .delete(`/api/events/${id}`)
      .then(
        API.getEvents()
        .then(res => this.setState({ events: res.data }))
        .catch(err => console.log(err.data))
      )
      .catch(err => console.log(err.data));
  };
  render() {
    const style = {
      card: {
        position: "relative"
      },
      icon: {
        position: "absolute",
        top: "2%",
        right: "2%"
      },
      iconColor: {
        color: "#fff"
      }
    };
    return (
      <div>
        {this.state.events.map(event => (
          <div>
            <div className="row">
              <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <div style={style.icon}>
                      <i
                        className="material-icons"
                        id={event._id}
                        onClick={this.onClick}
                        style={style.iconColor}
                      >
                        delete
                      </i>
                    </div>
                    <span className="card-title">{event.title}</span>
                    <p>
                      <strong>When:</strong>{" "}
                      <Moment format="MMMM Do">{event.date}</Moment> @{" "}
                      <Moment format="h:mm">{event.time}</Moment>
                    </p>
                    <p>
                      <strong>Where:</strong> {event.locationName}
                    </p>
                    <p>
                      <strong>Address:</strong> {event.locationAddress}
                    </p>
                    <p>{event.note}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default EventCard;
