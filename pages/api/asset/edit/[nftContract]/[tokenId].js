import dbConnect from "../../../../../database/dbConnect";
const {NFTModel} = require("../../../../../database/dbModel/NFT")
const {UserModel} = require("../../../../../database/dbModel/User")

export default async function handler(req,res) {
    dbConnect();
    //* Send back to client only the product data which match productId
    const {nftContract,tokenId} = req.query;
    const nftData = await NFTModel.findOne({nftContract:nftContract,tokenId:tokenId})

    if(req.method === "GET") {
        res.status(200).json(nftData);
    }else if (req.method === "POST") {
        const {nameInput,descriptionInput,priceInput} = JSON.parse(req.body)

        // Update nft data on MongoDB
        try {
            let data = await NFTModel.findOneAndUpdate({nftContract:nftContract,tokenId:tokenId},
                {
                    nftName:nameInput || nftData.nftName,
                    description:descriptionInput || nftData.description,
                    price:priceInput || nftData.price
                },
                {
                    new:true
                }
            )
            res.status(201).json(data)
        } catch (error) {
            console.log(error);
        } 
    }

    res.status(404)
    
}