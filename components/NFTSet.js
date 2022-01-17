import NFTCard from "./NFTCard"

const NFTSet = ({data}) => {
    return (
        <div className="flex space-x-10 w-screen justify-center items-center mb-10">
             <NFTCard 
                image={data.image}
                username={data.username}
                profileImage={data.profileImage}
                nftName={data.nftName}
                blockchain={data.blockchain}
                blockchainImage={data.blockchainImage}
                price={data.price}
                unit={data.unit}
            />
             <NFTCard 
                image={data.image}
                username={data.username}
                profileImage={data.profileImage}
                nftName={data.nftName}
                blockchain={data.blockchain}
                blockchainImage={data.blockchainImage}
                price={data.price}
                unit={data.unit}
            />
             <NFTCard 
                image={data.image}
                username={data.username}
                profileImage={data.profileImage}
                nftName={data.nftName}
                blockchain={data.blockchain}
                blockchainImage={data.blockchainImage}
                price={data.price}
                unit={data.unit}
            />
        </div>
    )
}

export default NFTSet
