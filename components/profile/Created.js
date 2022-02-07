import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NFT3D from "../NFT3D";

const Created = ({ownerWalletAddress,createdNFT,username}) => {
  const {walletAddress} = useSelector(state => state.user)
  const [assets, setAssets] = useState([]);

  useEffect(async () => {
    createdNFT.map(async (data) => {
        let res = await fetch(`http://localhost:3000/api/asset/${data.nftContract}/${data.tokenId}`)
        let {nftData} = await res.json();
        setAssets([...assets,nftData]) 
    })
  } , [])

  return (
    <div className="p-5">
        <p className="text-4xl font-bold">
          {ownerWalletAddress === walletAddress ? "Your" : username } Digital assets
        </p>
        
        <div className='grid grid-cols-2 place-items-center w-full'>
        {assets.map((data,index) => 
          <NFT3D data={data} key={index} card={true}/>
        )}
          
      </div>     
        
    </div>
  )
  };
  
  export default Created;
  