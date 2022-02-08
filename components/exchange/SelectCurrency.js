import React from 'react';
import Popup from 'reactjs-popup';
import THBLogo from "../../public/icons/currency/THB.png"
import USDLogo from "../../public/icons/currency/USD.png"
import Image from "next/image"

let currencyList =  [
  {
    name:"US Dollar",
    symbol:"USD",
    logo:USDLogo
  },
  {
    name:"Thai Baht",
    symbol:"THB",
    logo:THBLogo
  },
]


const SelectCurrency = ({triggerPopUp,setCurrency}) => {
  
  const handleChooseCurrency = (currencySymbol,close) => {
    setCurrency(currencySymbol);
    close();
  }

  return (
    <Popup 
    trigger={triggerPopUp} 
    position="right center"
    modal nested
    >
    {close => (
        <div className='relative h-fit w-full grid grid-cols-1 place-items-center rounded-full p-5'>
            {/* Header */}
            <button className="absolute top-0 right-0 border-2 px-3 py-1 text-2xl rounded" onClick={close}>
            &times;
            </button>
            <p className='text-xl font-bold place-self-start'>Select Currency</p>
            
            {/* List of Currency */}
            {currencyList.map(currency => 
              <button 
                className='flex space-x-2 cursor-pointer mt-5 hover:bg-gray-100 w-full items-center rounded'
                onClick={() => handleChooseCurrency(currency.symbol,close)}
              >
                <Image src={currency.logo} height={60} width={60} />
                <div className='grid grid-cols-1 place-items-start space-y-1 p-2'>
                  <p className='text-lg font-bold '>{currency.symbol}</p>
                  <p className='text-gray-500'>{currency.name}</p>
                </div>
              </button>
            )}

        </div>
    )}


    </Popup>
  )
};

export default SelectCurrency;
