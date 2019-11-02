module.exports = function(app) {
    const express = require("express");
    const db = require("../../models");
    const axios = require("axios");
  
    // Test works in postman
    app.get("api/announcements/test", (req, res) => {
      res.json({
        msg: "events routes works!"
      });
    });
  
    // Test works in postman
    app.get("/api/announcements", (req, res) => {
      db.Announcement.find()
        .then(function(dbAnnouncement) {
          // If any Events are found, send them to the client
          res.json(dbAnnouncement);
        })
        .catch(function(err) {
          // If an error occurs, send it back to the client
          res.json(err);
        });
    });
  
    // Test works in postman
    app.get("/api/announcements/:id", (req, res) => {
      db.Announcement.find({ title: req.params.id })
        .then(function(dbEvent) {
          // If any Events are found, send them to the client
          res.json(dbEvent);
        })
        .catch(function(err) {
          // If an error occurs, send it back to the client
          res.json(err);
        });
    });
  
    // Test works in postman
    app.post("/api/announcements", (req, res) => {
      console.log("events post route");
      const announcement = {
       title: req.body.title,
       info: req.body.info
      };
      db.Announcement.create(announcement)
        .then(() => {
          res.json({
            success: true
          });
        })
        .catch(err => {
          throw err;
        });
    });
  
    // Test works in postman
    app.put("/api/announcements/:id", (req, res) => {
      console.log("announcements put route");
      const event = {
        title: req.body.title,
        info: req.body.title
      };
      db.Announcement.findOneAndUpdate({ title: req.params.id, $set: req.body })
        .then(() => {
          res.json({
            success: true
          });
        })
        .catch(err => {
          throw err;
        });
    });
  
  // Test works in postman
    app.delete("/api/announcements/:id", (req, res) => {
      db.Announcement.findOneAndDelete({ _id: req.params.id })
        .then(() => {
          res.json({
            success: true
          });
        })
        .catch(err => {
          throw err;
        });
    });
  };
  