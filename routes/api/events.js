module.exports = function(app) {
  const express = require("express");
  const db = require("../../models");
  const axios = require("axios");

  // Test works in postman
  app.get("/eventstest", (req, res) => {
    res.json({
      msg: "events routes works!"
    });
  });

  // Test works in postman
  app.get("/api/events", (req, res) => {
    db.Event.find()
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
  app.get("/api/events/:id", (req, res) => {
    db.Event.find({ title: req.params.id })
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
  app.post("/api/events", (req, res) => {
    console.log("events post route");
    const event = {
      date: req.body.date,
      title: req.body.title,
      creator: req.body.creator,
      attending: req.body.attending,
      locationName: req.body.locationName,
      locationAddress: req.body.locationAddress,
      time: req.body.time,
      note: req.body.note
    };
    db.Event.create(event)
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
  app.put("/api/events/:id", (req, res) => {
    console.log("events put route");
    const event = {
      title: req.body.title,
      date: req.body.date,
      creator: req.body.creator,
      attending: req.body.attending,
      locationName: req.body.locationName,
      locationAddress: req.body.locationAddress,
      time: req.body.time,
      notes: req.body.notes
    };
    db.Event.findOneAndUpdate({ title: req.params.id, $set: req.body })
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
  app.delete("/api/events/:id", (req, res) => {
    db.Event.findOneAndDelete({ _id: req.params.id })
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
