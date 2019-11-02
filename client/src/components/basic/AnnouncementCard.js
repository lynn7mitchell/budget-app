import React, { Component } from 'react'
import axios from 'axios'

export class Announcments extends Component {
    state={
        announcments:[],
        isAdmin: false
    }

    componentDidMount(){


      axios
      .get("api/user")
      .then(response => {
        this.setState({
          user: response.data
        });
        if (this.state.user.role === "admin") {
          this.setState({
            isAdmin: true
          });
        }
      })
      .catch(err => console.log(err.response));
  


        axios.get('/api/announcements')
        .then(res => this.setState({announcments: res.data}))
        .catch(err => console.log(err.data))


    }


    onClick = e =>{
      const id = e.target.id
      axios.delete(`/api/announcements/${id}`)
      .then(
        axios.get('/api/announcements')
        .then(res => this.setState({announcments: res.data}))
        .catch(err => console.log(err.data))
      )
        .catch(err => console.log(err.data))
    }

    
    
    render() {

      const style={
        card:{
          position: "relative"
        },
        icon:{
          position: "absolute",
          top: "2%",
          right: "2%"
        },
        iconColor:{
          color: "#fff"
        }

      }
      if(!this.state.isAdmin){
        style.icon = {
          display: "none"
        }
      }
       
        //Render announcements from the database using .map
        //Order anouncments by date

        //pin announcements to show up on top
        return (
            <div>
                {this.state.announcments.map(announcement => (
                  <div>
                    <div className="row">
                      <div className="col s12 m10 offset-m1">
                        <div className="card blue-grey darken-1">
                          <div className="card-content white-text" style={style.card}>
                            <div style={style.icon}><i className="material-icons" id={announcement._id} onClick={this.onClick} style={style.iconColor}>delete</i></div>
                            <span className="card-title">{announcement.title}</span>
                            <p>{announcement.info}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 ))}
            </div>
        )
    }
}

export default Announcments
