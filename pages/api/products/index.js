import dbConnect from "../../../database/dbConnect";
const {NFTModel} = require("../../../database/dbModel/NFT")

export default async function handler(req,res) {
    // Connect to MongoDB dattabase
    dbConnect();
    // get all of the data bbject
    const products  = await NFTModel.find({});
    
    res.status(200).send(products);
}