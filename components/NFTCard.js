import { useRouter } from "next/router";


const NFTCard = ({productId,image,owner,ownerImage,nftName,blockchain,blockchainImage,price,unit}) => {
    const router = useRouter();

    const goToProduct = () => {
        router.push({
            pathname: '/product/[productId]',
            query: { 
                productId:productId,
            },
        })
    }

    return (
        <div 
            className="border-1 shadow-xl flex-col rounded-xl w-48 h-72 hover:scale-105 cursor-pointer
            transform transition duration-300 ease-out active:scale-95 bg-white truncate"
            onClick={goToProduct}
        >
            {/* Card Head */}
            <div className="px-2 py-1 flex justify-start items-center space-x-2">
                <img src={ownerImage} alt={owner} className="h-6 rounded-full" />
                <p className="text-xs font-medium">{owner}</p>
            </div>

            <img src={image} alt={nftName} className="h-48 w-48 object-cover" />
            
            {/* Card Footer */}
            <div className="flex-col space-y-2 p-1 ">
                <p className="text-xs font-bold">{nftName}</p>

                <div className="flex justify-between">
                    <div className="flex items-center justify-start space-x-1">
                        <p className="text-xs text-gray-500">Price</p>
                        <img src={blockchainImage} alt={blockchain} className="h-5 rounded-full"/>
                    </div>

                    <div className="flex space-x-1 text-xs font-medium text-gray-500">
                        <p>{price}</p>
                        <p>{unit}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NFTCard
