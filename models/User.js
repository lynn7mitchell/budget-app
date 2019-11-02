const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
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
    budgets:{
        food:{
            type: Number,
            default: 0,
        },
        tansportation:{
            type: Number,
            default: 0,
        },
        lifestyle:{
            type: Number,
            default: 0,
        },
        housing:{
            type: Number,
            default: 0,
        },
        debt:{
            type: Number,
            default: 0,
        },
        insurance:{
            type: Number,
            default: 0,
        },
        savings:{
            type: Number,
            default: 0,
        },
        fun:{
            type: Number,
            default: 0,
        }
    },
    spendingSoFar:{
        type: Number,
        default: 0,
    },
    toSpendThisMonth:{
        type: Number,
        default: 0,
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;
