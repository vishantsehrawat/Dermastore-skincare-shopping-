const mongoose = require("mongoose");
// const connection = mongoose.connect("mongodb://127.0.0.1:27017/fullStackApp");

// step2 make user schema 

const productSchema = mongoose.Schema({
    image:{type : String},
    title:{type : String},
    price:{type : String},
    // author:{type : String},
    userId:{type:String},
    // userId:[{ type: Schema.Types.ObjectId, ref: 'user' }]
},{
    versionKey:false
})

// now user model for user

const ProductModel = mongoose.model("product",productSchema);

module.exports = {ProductModel};