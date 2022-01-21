import NFTCard from "./NFTCard"

const Banner = ({data}) => {
    return (
        <div className='flex px-12 py-14 justify-between space-x-5'>
            <div className="flex-col w-3/6 space-y-5 text-black">
                <p className="text-4xl font-bold ">
                    Free 
                    <span className=""> Creativity</span> 
                    , Feel 
                    <span className=""> Story </span> 
                     and Form 
                    <span className=""> Community</span> 
                </p>
                <p className="text-xl font-regular ">
                    Explore your interest NFT with special contract offer from creator.
                </p>
            </div>
            <NFTCard 
                key={data.productId}
                productId={data.productId}
                image={data.image}
                owner={data.owner}
                ownerImage={data.ownerImage}
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

//? 1.Explore Creativity , Write Story and Build Community
//? 2.Creativity , Story and Community
//* 3.Exchange your digital items with cryptocurrency to anyone in the world