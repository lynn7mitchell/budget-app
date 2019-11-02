import axios from "axios";

export default {
  // Gets all EVENTS
  getEvents: function() {
    return axios.get("/api/events");
  },
  // Gets the EVENTS with the given id
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  // Saves a EVENTS to the database
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  },
  //Updates Events
  updateEvent: function(eventData){
    return axios.put("/api/events", eventData)
  },
  // Deletes the EVENTS with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  



  // Gets all notes
  getAlbums: function() {
    return axios.get("/api/albums");
  },
  // Gets the note with the given id
  getAlbum: function(id) {
    return axios.get("/api/albums/" + id);
  },
  // Deletes the note with the given id
  deleteAlbum: function(id) {
    return axios.delete("/api/albums/" + id);
  },
  // Saves a note to the database
  saveAlbum: function(albumData) {
    return axios.post("/api/albums", albumData);
  }
};
