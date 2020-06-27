const mongoose = require("mongoose");

const ShirtSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    colors: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    retail_price: {
        type: Number,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
});

module.exports = Shirts = mongoose.model("shirts", ShirtSchema);