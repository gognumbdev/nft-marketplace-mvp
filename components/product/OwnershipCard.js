
const OwnershipCard = ({owner,ownerImage,creatorImage,creator}) => {
    return (
        <div className="h-full flex-col w-96 justify-start shadow-xl rounded-lg bg-white p-2 space-y-2 ">
            {/* Owner */}
            <div className="flex justify-between items-center text-sm">
                <p className="text-gray-500">Owner</p>
                <div className="flex grow items-center justify-end cursor-pointer hover:scale-105 transform transition duration-150 ease-out">
                    <img src={ownerImage} alt={owner} className="h-10 rounded-full" />
                    <p className="truncate ml-2">{owner}</p>
                </div>
            </div>

            {/* Created by  */}
            <div className="flex justify-between items-center text-sm">
                <p className="text-gray-500">Creator</p>
                <div className="flex grow justify-end items-center cursor-pointer hover:scale-105 transform transition duration-150 ease-out">
                    <img src={creatorImage} alt={creator} className="h-10 rounded-full" />
                    <p className="truncate ml-2">{creator}</p>
                </div>
            </div>

        </div>
    )
}

export default OwnershipCard
