const ContractBox = ({offer,blockchain,blockchainImage,unit}) => {
    return (
        <div className="flex-col mt-5 shadow-lg bg-white rounded w-3/6 p-5 space-y-5 text-lg cursor-pointer
                        hover:scale-105 transform transition duration-300 ease-out"
        >
            {/* Deliver time */}
            <p className="flex justify-start">
                <span className="font-semibold">Deliver time</span> 
                <span className="mx-2">
                    {offer.deliverTime}
                </span> 
                    {offer.deliverTime > 1 ? "days" : "day"}
            </p>
            
            {/* Price */}
            <div className="flex-col justify-start">
                <div className="flex space-x-10  items-center font-semibold">
                    <span className="flex items-center space-x-2">
                        Price
                        <img src={blockchainImage} alt={blockchain} className="h-6 rounded-full cursor-pointer" />
                    </span>
            
                    {/* Cryptocurrency Price */}
                    <p className="font-semibold">{offer.price} {unit}</p>
                </div>

                {/* USD price */}
                <p className="ml-28 text-gray-500"> ≈ $<span>{(offer.price*2.33).toFixed(2)}</span></p>
            </div>

            {/* Description */}
            <div className="flex-col space-y-2">
                <p className="text-xl font-semibold">Description</p> 
                <p className="mx-2 font-normal text-base">
                    {offer.description}
                </p> 
            </div>

        </div>
    )
}

export default ContractBox
