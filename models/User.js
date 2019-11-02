const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    created_at:{
        type: Date,
        required: true,
        default: Date.now()
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    bio:{
        type: String,
    },
    phoneNumber:{
        type: String
    },
    address:{
        type: String
    },
    age:{
        type: Number
    },
    grade:{
        type: Number,
    },
    school:{
        type: String,
    },
    role:{
        type: String,
        default: "student"
    }

    // image:{

    // }


})

const User = mongoose.model("User", UserSchema);

module.exports = User;
