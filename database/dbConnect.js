const mongoose = require("mongoose");
const config = require("../next.config")

const dbConnect = async () => {
    await mongoose.connect(config.env.mongoDB_uri) 
    .then(() => console.log('MongoDB Connected Successfully'))
    .catch((err) => console.error('Not Connected'));
}

module.exports = dbConnect
