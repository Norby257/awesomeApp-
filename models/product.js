var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// 1  this describes the collections 
var productSchema = new Schema({
    name: {
        //  string object 
        type: String,
    },

    price: {
        type: Number,
        default: 0
    }
});

//  2  - create the model with name of model and the name of description 
var Product  = mongoose.model("Product", productSchema );

//  3  - export it  - just the created model and not the description 
module.exports = Product;
