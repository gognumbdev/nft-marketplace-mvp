import { useEffect, useState } from "react"

const OwnershipCard = ({router,ownerData,creatorData}) => {
    
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
                onClick={() => goToProfile(ownerData.walletAddress) }
            >
                <p className="text-gray-500">Owner</p>
                <div className="flex items-center justify-end cursor-pointer hover:translate-x-2 hover:text-blue-500 
                    transform transition duration-150 ease-out">
                    <img src={ownerData.profileImage} alt={ownerData.username} className="h-10 rounded-full" />
                    <p className="truncate ml-2">{ownerData.username || ownerData.walletAddress}</p>
                </div>
            </div>

            {/* Created by  */}
            <div 
                className="flex justify-start space-x-2 items-center text-sm"
                onClick={() => goToProfile(creatorData.walletAddress) }
            >
                <p className="text-gray-500">Creator</p>
                <div className="flex justify-end items-center cursor-pointer hover:translate-x-2 hover:text-blue-500 
                    transform transition duration-150 ease-out">
                    <img src={creatorData.profileImage} alt={creatorData.username} className="h-10 rounded-full" />
                    <p className="truncate ml-2">{creatorData.username || creatorData.walletAddress}</p>
                </div>
            </div>

        </div>
    )
}

export default OwnershipCard
