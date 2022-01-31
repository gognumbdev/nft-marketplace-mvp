import { useSelector } from "react-redux";
import NFT3D from "../NFT3D"

const Asset = ({ownerWalletAddress,ownedNFT,username}) => {
  const {walletAddress} = useSelector(state => state.user)

  

    return (
      <div className="p-5">
          <p className="text-4xl font-bold">
            {ownerWalletAddress === walletAddress ? "Your" : username } Digital assets
          </p>
          
          <div className='grid grid-cols-2 place-items-center w-full'>
          {ownedNFT.map((nftData,index ) => (
              <NFT3D data={nftData} key={index} card={true}/>
            )
          )}
           
        </div>     
          
      </div>
    )
  };
  
  export default Asset;
  