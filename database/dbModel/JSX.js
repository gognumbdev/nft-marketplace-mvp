const mongoose = require("mongoose")

const JSXSchema = new mongoose.Schema({
    productId:Number,
    model:String,
    nftName:String,
    blockchain:String,
    angle:Boolean
})

const JSXModel = mongoose.model("NFT",JSXSchema);

module.exports = JSXModel
