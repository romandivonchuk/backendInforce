const mongoose = require('mongoose');





const productSchema = new mongoose.Schema({
    id: {
        type: String,
    },

    imageUrl: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    size: {
        type: Object,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    comments: {
        type: Array,
        required: true
    }
    

})


const Product = mongoose.model("Product", productSchema)

module.exports = Product;
