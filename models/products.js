const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId 
    },
    name: {
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required:true
    }
},{
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;