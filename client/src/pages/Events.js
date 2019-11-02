import React, { Component } from 'react'
import API from "../utils/API"
import EventCard from '../components/basic/EventCard'
import Navbar from "../components/basic/Navbar"

export class Events extends Component {
    
    // Route to the add CreateEvent component (button)

    // Render Events from the database using .map
    
//     //  state={
//     events:{}
// }

// componentDidMount(){
//   axios.get('/api/events')
//   .then(response =>{
//     this.setState({
//       events: response.data
//     })
//   })
//   .catch(err => console.log(err))
// }

    render() {
        return (
            <div>
                        <Navbar />

                <h3 className="subheader">Events</h3>
                <EventCard />
                <a href="/createevent"><i className="material-icons small add-event-icon">add_circle_outline</i></a>


            </div>
        )
    }
}

export default Events
