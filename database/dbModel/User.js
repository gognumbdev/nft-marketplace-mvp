import mongoose from "mongoose"
const {NFTSchema} = require("./NFT")

const userSocialSchema = new mongoose.Schema({
    name: String,
    value: String,
    link: String
})

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

const UserSchema = new mongoose.Schema({
    username: String,
    walletAddress: String,
    profileImage: String,
    description: String,
    socialNetworks: [userSocialSchema],
    transactions:[transactionSchema],
    listedNFT:[NFTSchema],
    ownedNFT:[NFTSchema]
})


let UserModel =  (mongoose.models && mongoose.models.User
    ? mongoose.models.User
    : mongoose.model('User', UserSchema))

module.exports = {UserModel}