
const OwnershipCard = ({nftName,owner,ownerImage,creator}) => {
    return (
        <div className="flex-col w-96  justify-start">
            
            {/* NFT NAME */}
            <p className="font-bold text-2xl">
                {nftName}
            </p>

            {/* Owner */}
            <div className="flex justify-between">
                <p className="text-gray-500"></p>
                <span>
                    <img src={ownerImage} alt={owner} />
                    <p></p>
                </span>
            </div>

            {/* Created by  */}
            <div className="">
                <p></p>
                <span>
                    <img src="" alt="" />
                    <p></p>
                </span>
            </div>

        </div>
    )
}

export default OwnershipCard
