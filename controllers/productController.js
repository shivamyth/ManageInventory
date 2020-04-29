const mongoose = require('mongoose');

const Product = require('../models/products');

//CREATING A PRODUCT

module.exports.createProduct = async function (req, res) {
    try {
        console.log(req.body);
        let result = await Product.create({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            quantity: req.body.quantity,
        });
        // Saving result 
        result.save();
        console.log(result);
        var ans = {
            name:result.name,
            quantity:result.quantity
        }
        res.status(200).json({
            product: ans
        });
    } catch (err) {
        // IF ERROR
        res.status(500).json({
            message:"Internal Error in Creating Products",
            error: err
        });
    }
};

//EDIT THE QUANTITY OF PRODUCTS

module.exports.editProductQuantity = async function (req, res) {
    try {
        const id = req.params.id;
        //FIND PRODUCT
        let product = await Product.findOne({ _id: req.params.id });
        //UPDATE
        let result = await Product.update({ _id: id}, { $set: { quantity: req.query.number } });
        res.status(200).json({
            message: "Updated Successfully"
        });
    } catch (err) {
        //IF ERROR
        res.status(500).json({
            message:"Internal Error in Updating Quantity",
            error: err
        });
    }
};

//DELETE THE PRODUCT WITH GIVEN ID
module.exports.deleteProduct = async function (req, res) {
    try {
        const id = req.params.id;
        // FIND PRODUCT
        let product = await Product.findOne({ _id: req.params.id });
        // REMOVE PRODUCT
        let result = await Product.remove({ _id: id });
        res.status(200).json({
            message: "Deleted Successfully"
        });
    } catch (err) {
        //IF ERROR
        res.status(500).json({
            message:"Internal Error in Deleting Product",
            error: err
        });
    }
};

// GET ALL PRODUCTS
module.exports.getProducts = async function (req, res) {
    try {
        //FIND ALL PRODUCTS
        let prods = await Product.find({ }).select('name _id quantity');
        //IF THERE IS ATLEAST ONE PRODUCT 
        if (prods.length > 0) {
            res.status(200).json({Products:prods});
        } else {
            // IF NO PRODUCTS
            res.status(200).json({
                message: "No Products available"
            });
        }
    } catch (err) {
        //IF ERR
        res.status(500).json({
            message:"Internal Error in Getting Products",
            error: err
        });
    }
};
