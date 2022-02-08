import React from 'react';
import Popup from 'reactjs-popup';
import ETHLogo from "../../public/icons/crypto/ethereum.png"
import PolygonLogo from "../../public/icons/crypto/polygon.png"
import BNBLogo from "../../public/icons/crypto/BNB.png"
import Image from "next/image"

let cryptoList = [
  {
    name:"Ethereum",
    symbol:"ETH",
    logo:ETHLogo
  },
  {
    name:"Polygon",
    symbol:"Matic",
    logo:PolygonLogo
  },
  // {
  //   name:"Binance Smart Chain",
  //   symbol:"BNB",
  //   logo:BNBLogo
  // },
]

const SelectCrypto = ({triggerPopUp,setCrypto}) => {
  const handleChooseCrypto = (cryptoSymbol,close) => {
    setCrypto(cryptoSymbol);
    close();
  }
  return (
    <Popup 
      trigger={triggerPopUp} 
      position="right center"
      modal nested
    >
    {close => (
        <div className='relative h-fit w-full grid grid-cols-1 place-items-center rounded-full p-5 '>
            {/* Header */}
            <button className="absolute top-0 right-0 border-2 px-3 py-1 text-2xl rounded" onClick={close}>
            &times;
            </button>
            
            <p className='text-xl font-bold place-self-start'>Select Cryptocurrency</p>

            {/* List of crypto */}
            {cryptoList.map(crypto => 
              <button 
                className='flex space-x-2 cursor-pointer mt-5 hover:bg-gray-100 w-full items-center rounded'
                onClick={() => handleChooseCrypto(crypto.symbol,close)}
              >
                <Image src={crypto.logo} height={60} width={60} />
                <div className='grid grid-cols-1 place-items-start space-y-1 p-2'>
                  <p className='text-lg font-bold '>{crypto.symbol}</p>
                  <p className='text-gray-500'>{crypto.name}</p>
                </div>
              </button>
            )}

        </div>
    )}
    </Popup>
  )
};

export default SelectCrypto;
