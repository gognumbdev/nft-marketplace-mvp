import dbConnect from "../../../../database/dbConnect";
const {NFTModel} = require("../../../../database/dbModel/NFT")
const {UserModel} = require("../../../../database/dbModel/User")

export default async function handler(req,res) {
    dbConnect();
    //* Send back to client only the product data which match productId
    const {nftContract,tokenId} = req.query;
    const nftData = await NFTModel.find({nftContract:nftContract,tokenId:tokenId})

    if(req.method === "GET") {
        const {ownerWalletAddress,creatorWalletAddress} = nftData[0];
        const creatorData = await UserModel.find({walletAddress:creatorWalletAddress});
        const ownerData = await UserModel.find({walletAddress:ownerWalletAddress});
        res.status(200).json({
            nftData:nftData[0],
            creatorData:creatorData[0],
            ownerData:ownerData[0]
        })
    }
    res.status(404)
    
}