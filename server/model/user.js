const { Timestamp } = require("mongodb")

const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
        userName: {
            type: String,
            required: true
        },
        googleId:{
            type: String,
            required: false
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        phoneNumber:{
            type: Number,
            required: false
        },
        product:{
            type: [String],
            required: true,
        }
},
{
    timestamp: true
}
)

const User = new mongoose.model('user', UserSchema)

module.exports = User