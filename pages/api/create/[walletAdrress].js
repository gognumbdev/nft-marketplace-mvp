import dbConnect from "../../../database/dbConnect";
const {NFTModel} = require("../../../database/dbModel/NFT")


export default async function handler(req,res) {
    dbConnect();
    //* Send back to client only the product data which match productId
    const {walletAddress} = req.query;
    
    if(req.method === "POST"){
        let {name,description,price,blockchain} = JSON.parse(req.body)        
        // Create new nft on MongoDB
        try {
            let data = await NFTModel.create({
                nftName:name,
                description:description,
                price:parseFloat(price),
                blockchain:blockchain,
                ownerWalletAddress:walletAddress,
                creatorWalletAddress:walletAddress,
                unit:"Matic" 
            })
            res.status(201).json(data)
        } catch (error) {
            console.log(error);
        } 
    }
    

    res.status(200).json(nftData[0])
}