const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var EventSchema = new Schema({
    date:{
        type: Date
    },
    title:{
        type: String,
        required: true
    },
    creator:{
        type: String,
        required: true
    },
    attending:[{
        type: String
    }],
    locationName:{
        type: String,
        required: true
    },
    locationAddress:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    note:{
        type: String
    }


})

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
