import ContractBox from "./ContractBox";

const NFTInsight = ({offering,story,blockchain,blockchainImage,unit}) => {
    const offers = offering.offerList ;

    return (
        <div className="flex-col w-screen mt-10">
            {/* Story */}
            <div className="shadow-lg bg-white w-10/12 self-center rounded-xl ml-16 h-fit px-8 py-5 space-y-2">
                <p className="text-3xl font-bold">Story</p>
                <p className="text-base font-medium">{story}</p>
            </div>

            {/* Contract Details */}
            {offering.offer && (
                <div className="w-full ml-16 mt-16">
                    <p className="text-3xl font-bold">Contract Details</p>
                    {offers.map((offer,index) => (
                        <ContractBox 
                            key={index}
                            offer={offer} 
                            blockchain={blockchain} 
                            blockchainImage={blockchainImage} 
                            unit={unit} 
                        />
                    ))}
                </div>
            )}
            
            
        </div>
    )
}

export default NFTInsight
