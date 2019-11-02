const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var AlbumSchema = new Schema({
    title:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    },
    thumbnail:{
        data: Buffer,
        type: String
    },
    images:[
        {
        data: Buffer,
        type: String
    }
   ],
   creator:{

   }

})

const Album = mongoose.model("Album", AlbumSchema);

module.exports = Album;
