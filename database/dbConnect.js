const mongoose = require("mongoose")
const config = require("../next.config")

const dbConnect = async () => {
    await mongoose.connect(config.env.mongoDB_uri)
    console.log("MongoDB Connected");
}

module.exports = dbConnect
