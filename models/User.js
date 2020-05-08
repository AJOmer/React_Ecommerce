const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minglength: 5,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    address: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        zipcode: {
            type: Number,
        },
        state: {
            type: String,
        },
        country: {
            type: String,
        },
    },
});

module.exports = User = mongoose.model("user", userSchema);