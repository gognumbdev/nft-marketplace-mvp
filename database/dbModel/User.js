const mongoose = require("mongoose")

const userSocialSchema = new mongoose.Schema({
    name: String,
    value: String,
    link: String
})

const UserSchema = new mongoose.Schema({
    username: String,
    walletId: String,
    profileImage: String,
    description: String,
    socialNetworks: [userSocialSchema]
})

export default (mongoose.models && mongoose.models.User
    ? mongoose.models.User
    : mongoose.model('User', UserSchema));
