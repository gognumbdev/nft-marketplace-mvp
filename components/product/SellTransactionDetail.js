import React from 'react';

const SellTransactionDetail = ({nftData,maticPerUSD}) => {
  const {nftName,nftContract,price,unit,blockchainImage,blockchain} = nftData

  return (
    <div className="w-full p-4 grid grid-cols-1" >
        {/* NFT Name */}
        <p className="text-4xl font-bold">{nftName}</p>
        
        {/* NFT Contract */}
        <p className="flex justify-start items-center space-x-10 mt-4 font-medium">
            <span>NFT Contract</span>
            <span>{nftContract}</span>
        </p>
        
        {/* Price */}
        <div className="grid grid-cols-1 mt-2 place-items-start font-medium space-y-1">
            <div className="flex space-x-16  items-center">
                <span className="flex items-center space-x-2">
                    <p className="">Price</p>
                    <img src={blockchainImage} alt={blockchain} className="h-6 rounded-full cursor-pointer" />
                </span>
        
                {/* Cryptocurrency Price */}
                <p className="">{price} {unit}</p>
            </div>

            {/* USD price */}
            <p className="ml-[139px] text-gray-500"> ≈ ${(price*maticPerUSD).toFixed(2)}</p>
        </div>
  
        {/* Action Button */}
        <button className="place-self-center w-fit p-2 bg-amber-500 rounded font-bold  text-xl mt-5
            transition duration-200 transform ease-out hover:scale-105"
        >
            Confirm Sell
        </button>

    </div>
  );
};

export default SellTransactionDetail;
