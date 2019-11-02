module.exports = function(app) {
    const express = require("express");
    const db = require("../../models");
    const axios = require("axios");
    const fs = require('fs')
  
    app.get("/albumstest", (req, res) => {
      res.json({
        msg: "albums routes works!"
      });
    });




  
    app.get("/api/albums", (req, res) => {
     
    });
  
    app.post("/api/albums", (req, res) => {
      console.log(req.body)
      newAlbum={
        title: req.body.title,
        thumbnail: req.body.thumbnail,
        images: req.body.images
      }

      db.Album.create(newAlbum)
      .then(() => {
        res.json({
          success: true
        });
      })
      .catch(err => {
        throw err;
      });
    });

    app.put("/api/album", (req, res) => {

      });



  };

  