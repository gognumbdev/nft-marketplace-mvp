import NFTCard from "./NFTCard"

const NFTSet = ({data}) => {
    return (
        <div className="flex space-x-10 w-screen justify-center items-center mb-10">
            {data.map(nftData => (
                <NFTCard
                    key={nftData.productId}
                    productId={nftData.productId} 
                    image={nftData.image}
                    owner={nftData.owner}
                    ownerImage={nftData.ownerImage}
                    nftName={nftData.nftName}
                    blockchain={nftData.blockchain}
                    blockchainImage={nftData.blockchainImage}
                    price={nftData.price}
                    unit={nftData.unit}
                />
            ))}
        </div>
    )
}

export default NFTSet
