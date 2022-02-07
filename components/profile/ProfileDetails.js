import {
  ClipboardCheckIcon,
  PencilAltIcon,
  SwitchHorizontalIcon
} from '@heroicons/react/outline'

import { useState } from "react";
import Asset from './Asset';
import Created from './Created';
import Transaction from './Transaction';
import { useSelector } from "react-redux";

let tabData = [
  {
    name:"asset",
    icon:<ClipboardCheckIcon  className='h-10 md:h-14' />
  },
  {
    name:"created",
    icon:<PencilAltIcon className='h-10 md:h-14' />
  },
  {
    name:"transaction",
    icon:<SwitchHorizontalIcon className='h-10 md:h-14' />
  }
]

const ProfileDetails = ({userData}) => {
  const [tab, setTab] = useState("asset");
  const user = useSelector(state => state.user)

  const handleClickTab = (clickedTab) => {
    if(tab !== clickedTab) setTab(clickedTab);
  }

  return (
    <div className="w-full mt-14">
      {/* TAB */}
      <div className="w-full shadow-lg  h-fit py-6 px-15 flex justify-center items-center space-x-10 text-2xl font-bold
        transition duration-150 transform ease-out">
          {tabData.map(({name,icon}) => (
            <div className={`grid-cols-1 grid place-items-center cursor-pointer hover:text-amber-500 transition duration-150 transform ease-out
                ${ (tab === name ) && "border-b-4 border-amber-500  text-amber-500" }`}
                onClick={() => handleClickTab(name)}>
                {name != "transaction" 
                  ? (
                    <>
                      {icon}
                      <p className={(tab === name ) ? "text-blue-500" : "text-black" }>{name}</p>
                    </>
                    ) 
                  : (
                      userData.walletAddress === user.walletAddress && (
                        <>
                          {icon}
                          <p className={(tab === name ) ? "text-blue-500" : "text-black" }>{name}</p>
                        </>
                      )
                    )
                }
            </div>))
          }
      </div>

      {/* Detail Components */}
      <div className='w-full py-14 px-10'>
        {tab === "asset" 
          ? (<Asset ownedNFT={userData.ownedNFT} ownerWalletAddress={userData.walletAddress} username={userData.username} />) 
          : ( tab === "transaction" 
            ? ( <Transaction transactions={userData.transactions} ownerWalletAddress={user.walletAddress} />) 
            : (<Created createdNFT={userData.createdNFT} walletAddress={userData.walletAddress} username={userData.username} />)
            )
        }
      </div>
    </div>
  
  )
};

export default ProfileDetails;
