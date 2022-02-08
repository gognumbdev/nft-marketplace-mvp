import dbConnect from "../../../database/dbConnect";
const {NFTModel} = require("../../../database/dbModel/NFT")

export default async function handler(req,res) {
    dbConnect();
    //* Send back to client only the product data which match productId
    const {productId} = req.query;
    const nftData = await NFTModel.find({productId:productId})

    res.status(200).json(nftData[0])
}