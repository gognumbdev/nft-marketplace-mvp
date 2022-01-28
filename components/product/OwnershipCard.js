
const OwnershipCard = ({owner,creator,router}) => {
    
    const goToProfile = (address) => {
        router.push({
            pathname:'/profile/[walletAddress]',
            query: { 
                walletAddress:address,
            }
        })
    }

    return (
        <div className="h-full flex-col w-96 justify-start shadow-xl rounded-lg bg-white p-2 space-y-2 ">
            {/* Owner */}
            <div 
                className="flex justify-start space-x-4 items-center text-sm"
                onClick={() => goToProfile(owner.walletAddress) }
            >
                <p className="text-gray-500">Owner</p>
                <div className="flex items-center justify-end cursor-pointer hover:translate-x-2 hover:text-blue-500 
                    transform transition duration-150 ease-out">
                    <img src={owner.profileImage} alt={owner.username} className="h-10 rounded-full" />
                    <p className="truncate ml-2">{owner.username || owner.walletAddress}</p>
                </div>
            </div>

            {/* Created by  */}
            <div 
                className="flex justify-start space-x-2 items-center text-sm"
                onClick={() => goToProfile(creator.walletAddress) }
            >
                <p className="text-gray-500">Creator</p>
                <div className="flex justify-end items-center cursor-pointer hover:translate-x-2 hover:text-blue-500 
                    transform transition duration-150 ease-out">
                    <img src={creator.profileImage} alt={creator.username} className="h-10 rounded-full" />
                    <p className="truncate ml-2">{creator.username || creator.walletAddress}</p>
                </div>
            </div>

        </div>
    )
}

export default OwnershipCard
