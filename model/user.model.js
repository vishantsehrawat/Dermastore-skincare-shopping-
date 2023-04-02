const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(process.env.mongoUrl);

// step2 make user schema 

const userSchema = mongoose.Schema({
    name:{type : String},
    email:{type : String},
    password:{type : String},
    // notes: [{ type: Schema.Types.ObjectId, ref: 'note' }]
},{
    versionKey:false
})

// now user model for user

const UserModel = mongoose.model("user",userSchema);

module.exports = {connection,UserModel};