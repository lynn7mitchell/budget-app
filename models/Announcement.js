const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var AnnouncementSchema = new Schema({
    title:{
        type: String
    },
    info:{
        type: String
    }
    // image:{}
}) 

const Announcement = mongoose.model("Announcement", AnnouncementSchema);

module.exports = Announcement;
