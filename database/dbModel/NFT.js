const mongoose = require("mongoose")

const NFTSchema = new mongoose.Schema({
    productId:Number,
    model:String,
    jsx:String,
    owner:String,
    ownerWalletId:String,
    creator:String,
    creatorWalletId:String,
    ownerImage:String,
    creatorImage:String,
    nftName:String,
    blockchain:String,
    blockchainImage:String,
    price:Number,
    unit:String,
    angle:Boolean
})

module.exports = (mongoose.models && mongoose.models.NFT
    ? mongoose.models.NFT
    : mongoose.model('NFT', NFTSchema));

