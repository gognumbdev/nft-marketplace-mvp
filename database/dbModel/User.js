const mongoose = require("mongoose")

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
    nftContract:String,
    fromAddress:String,
    toAddress:String,
    value:Number,
    network:networkSchema,
    unit:String,
    date:Date,
})

const UserSchema = new mongoose.Schema({
    username: String,
    walletAddress: String,
    network:networkSchema,
    chainId:Number,
    profileImage: String,
    description: String,
    socialNetworks: [userSocialSchema],
    transactions:[transactionSchema]
})

export default (mongoose.models && mongoose.models.User
    ? mongoose.models.User
    : mongoose.model('User', UserSchema));
