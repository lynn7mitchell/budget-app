const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var FeedSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    info:{
        type: String,
        required: true
    }
}) 

const Feed = mongoose.model("Feed", FeedSchema);

module.exports = Feed;
