import nftsData from "../../../database/nfts"

export default function handler(req,res) {
    //* Send back to client only the product dat which match productId
    const {productId} = req.query;
    const nftData = nftsData.find(nft => nft.productId === parseInt(productId))
    res.status(200).json(nftData)
}