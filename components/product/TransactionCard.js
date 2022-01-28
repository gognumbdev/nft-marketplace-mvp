import { useSelector } from "react-redux"


const TransactionCard = ({price,ownerWalletAddress,unit,blockchainImage,blockchain}) => {
    const user = useSelector(state => state.user)


    return (
        <div className="flex-col w-96 h-fit justify-start shadow-xl rounded-lg bg-white py-2 px-10 font-semibold">
            {/* Price */}
            <div className="flex-col justify-start text-base">
                <div className="flex space-x-10  items-center">
                    <span className="flex items-center space-x-2">
                        <p className="">Price</p>
                        <img src={blockchainImage} alt={blockchain} className="h-6 rounded-full cursor-pointer" />
                    </span>
            
                    {/* Cryptocurrency Price */}
                    <p className="">{price} {unit}</p>
                </div>

                {/* USD price */}
                <p className="ml-28 text-gray-500"> ≈ $<span>{(price*2.33).toFixed(2)}</span></p>
            </div>

            {/* Make Transaction button */}
                {ownerWalletAddress === user.walletAddress 
                    ? (
                        <button className="mt-2 bg-green-500 py-1 w-2/6 rounded hover:scale-105 transform transition duration-300 ease-out text-white">
                            sell
                        </button>
                    ) 
                    : (
                        <button className="mt-2 bg-amber-500 py-1 w-2/6 rounded hover:scale-105 transform transition duration-300 ease-out">
                            buy
                        </button>
                    ) 
                }
                
            
        </div>
    )
}

export default TransactionCard
