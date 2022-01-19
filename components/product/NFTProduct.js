const NFTProduct = ({image,nftName}) => {
    return (
        <div className="py-8">
            <center>
                <img src={image} alt={nftName} className="w-2/6 h-2/6  self-center" />
            </center>
            {/* NFT NAME */}
            <p className="relative font-bold text-xl ml-16 mt-3 px-5 py-3 w-fit max-w-xl shadow-xl bg-white rounded-xl">
                <span className="absolute top-[-20px] left-2 font-light text-base">name</span>
                {nftName}
            </p>
        </div>
    )
}

export default NFTProduct
