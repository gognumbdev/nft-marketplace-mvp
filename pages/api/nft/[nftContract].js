import dbConnect from "../../../database/dbConnect";
const {NFTModel} = require("../../../database/dbModel/NFT")

export default async function handler(req,res) {
    dbConnect();
    //* Send back to client only the product data which match productId
    const {nftContract} = req.query;
    const nftData = await NFTModel.find({nftContract:nftContract})

    if(req.method === "GET") {
        res.status(200).json(nftData[0])
    }else if (req.method === "POST"){
        const {nameInput,descriptionInput,priceInput} = JSON.parse(req.body)

        // Update nft data on MongoDB
        try {
            let data = await NFTModel.findOneAndUpdate({nftContract:nftContract},
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

    
}