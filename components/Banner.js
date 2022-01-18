import NFTCard from "./NFTCard"

const Banner = ({data}) => {
    return (
        <div className='flex px-12 py-14 justify-between space-x-5'>
            <div className="flex-col w-3/6 space-y-5 text-slate-800">
                <p className="text-4xl font-bold">Creativity , Story and Community</p>
                <p className="text-xl font-regular">Explore your interest NFT with special contract offer from creator.</p>
            </div>
            <NFTCard 
                key={data.productId}
                productId={data.productId}
                image={data.image}
                owner={data.owner}
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

export default Banner
