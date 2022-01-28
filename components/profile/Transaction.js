const Transaction = ({transactions,ownerWalletAddress}) => {
  return (
    <div className="p-5">
        <p className="text-4xl font-bold mb-10">Transaction</p>
        {transactions.map(({nftName,nftContract,fromAddress,toAddress,value,network,unit,date}) => (
            <div className="w-8/12 shadow-xl bg-white p-5 space-y-5" >
              <p className="p-2 text-4xl font-bold">{nftName}</p>
              
              {/* NFT Contract */}
              <p className="flex justify-start items-center space-x-10 p-2 cursor-pointer transition transform 
                  duration-300 ease-out hover:translate-x-1 hover:border-slate-300 hover:text-blue-500
                  rounded-full w-fit
                  ">
                <span className="text-xl font-bold">NFT Contract</span>
                <span className="font-medium">{nftContract}</span>
              </p>

              {/* From address */}
              <p className="flex space-x-[118px] p-2 ">
                <span className="text-xl font-bold">From</span>
                <span className="font-medium"> {fromAddress == ownerWalletAddress ? "your address" : fromAddress} </span>
              </p>

              {/* To Address */}
              <p className="flex space-x-36 p-2">
                <span className="text-xl font-bold">To</span>
                <span className="font-medium"> {toAddress == ownerWalletAddress ? "your address" : fromAddress} </span>
              </p>

              {/* Price for this transaction with units and blockchain */}
              <div className="flex justify-start items-center w-fit space-x-16 p-2">
                <div className="flex space-x-2 justify-start items-center">
                  <p className="text-xl font-bold">Price</p>
                  <img 
                    className="h-10 border-2 border-slate-300 rounded-full"
                    src="https://finematics.com/wp-content/uploads/2021/04/polygon-logo-270x250.png" alt="polygon" />
                </div>

                <p className="flex space-x-2 font-medium">
                  <span>{value}</span>
                  <span>{unit}</span>
                </p>
              </div>

              {/* Transaction Date */}
              <p className="flex space-x-[118px] p-2">
                <p className="text-xl font-bold">Date</p>
                <p className="font-medium">{date}</p>
              </p>

            </div>
          )  
        )}
    </div>
  )
};

export default Transaction;
