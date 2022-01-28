const mongoose = require("mongoose");

const networkSchema = new mongoose.Schema({
    chainId:Number,
    ensAddress:String,
    name:String
})


const transactionSchema = new mongoose.Schema({
    nftName:String,
    nftContract:String,
    fromAddress:String,
    toAddress:String,
    value:Number,
    network:networkSchema,
    unit:String,
    date:String,
})

const NFTSchema = new mongoose.Schema({
    nftContract:String,
    productId:Number,
    model:String,
    jsx:String,
    owner:String,
    ownerWalletAddress:String,
    creator:String,
    creatorWalletAddress:String,
    nftName:String,
    blockchain:String,
    blockchainImage:String,
    price:Number,
    unit:String,
    transaction:[ transactionSchema ]
})

const NFTModel = (mongoose.models && mongoose.models.NFT
    ? mongoose.models.NFT
    : mongoose.model('NFT', NFTSchema))
    
module.exports = { NFTModel , NFTSchema };

