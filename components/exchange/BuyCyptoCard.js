import { useEffect, useState } from "react";
import SelectCurrency from "./SelectCurrency"
import SelectCrypto from "./SelectCrypto"
import ETHLogo from "../../public/icons/crypto/ethereum.png"
import PolygonLogo from "../../public/icons/crypto/polygon.png"
import THBLogo from "../../public/icons/currency/THB.png"
import USDLogo from "../../public/icons/currency/USD.png"
import Image from "next/image"



const BuyCyptoCard = () => {
    const [purchaseAmount, setPurchaseAmount] = useState(500.0);
    const [receiveAmount, setReceiveAmount] = useState(500.0/100000);
    const [currency, setCurrency] = useState("THB");
    const [crypto, setCrypto] = useState("ETH");
    
    let currencyDetails = {
        "THB":{
            logo:THBLogo,
            min:500,
            ETH:103884,
            Matic:66,
        },
        "USD":{
            logo:USDLogo,
            min:15,
            ETH:3147,
            Matic:2.00,
        }
    }
    
    let cryptoDetails = {
        "ETH":{
            logo:ETHLogo,
            min:currencyDetails[currency].min * currencyDetails[currency]["ETH"],
            USD:1/currencyDetails[currency]["ETH"],
        },
        "Matic":{
            logo:PolygonLogo,
            min:currencyDetails[currency].min * currencyDetails[currency]["Matic"],
            USD:1/currencyDetails[currency]["Matic"],
        },
        // "BNB":{
        //     logo:BNBLogo,
        //     min:currencyDetails[currency].min * currencyDetails[currency]["BNB"],
        //     USD:1/currencyDetails[currency]["BNB"],
        // },
    }

    useEffect(() => {
        setReceiveAmount(purchaseAmount/currencyDetails[currency][crypto]);
    }, [currency,crypto]);
    
    
    const handlePurchase = (event) => {
        let purchaseInput = event.target.value;
        let fiatToCrypto = currencyDetails[currency][crypto]
        setPurchaseAmount(purchaseInput);
        setReceiveAmount(purchaseInput/fiatToCrypto)
    }
    
    const handleReceive = (event) => {
        let receiveInput = event.target.value;
        let cryptoToFiat = currencyDetails[currency][crypto]
        setPurchaseAmount(receiveInput*cryptoToFiat);
        setReceiveAmount(receiveInput)    
    }

    const handleCurrencyChange = (currencySymbol) => {
        setReceiveAmount(purchaseAmount/currencyDetails[currency][crypto]);
    }

    return (
        <div className="grid grid-cols-1 space-y-5 p-5">
            {/* price Crypto to fiat */}
            <p className="flex space-x-2 text-gray-400 place-self-center">
                <span>1 {crypto} ≈ </span>
                <span>{currencyDetails[currency][crypto]} {currency}</span>
            </p>
            
            {/* Purchase */}
            <div className={`p-4 rounded shadow-lg border-2 bg-slate-100 
                ${purchaseAmount >= currencyDetails[currency].min ? "border-green-500 " : "border-red-500 "} `}
            >
                <p className="text-xl font-bold ">Purchase</p>
                <div className="flex items-center justify-between mt-5">
                    <input type="number" placeholder={`at least ${currencyDetails[currency].min} ${currency}`} min={0} 
                        className="text-xl p-4 focus:border-amber-500 focus:border-2 outline-none rounded"
                        onChange={handlePurchase}
                        value={purchaseAmount}
                        step={currencyDetails[currency].min/5}
                    />
                    
                    <SelectCurrency
                        triggerPopUp={
                            <button className="shadow-lg bg-white p-2 flex items-center space-x-2 rounded-full
                                hover:-translate-y-1 active:scale-95 transition duration-150 transform ease-out">
                                {/* <CashIcon className="h-8 text-green-500"/> */}
                                <Image src={currencyDetails[currency].logo} height={40} width={40} />
                                <p className="text-lg font-bold">{currency}</p>
                            </button>
                        }
                        setCurrency={setCurrency}
                    />  
                    
                </div>
            </div>

            {/* Details */}
            <div className="px-4">
                {purchaseAmount < currencyDetails[currency].min ? (
                    <p className="text-red-500"> You need to spend at least {currencyDetails[currency].min} {currency}</p>
                ) : (
                    <p className="text-green-500">You can purchase with this amount</p>
                )}
            </div>

            {/* Receive */}
            <div className="p-4 rounded shadow-lg  border-2 hover:border-amber-500  bg-slate-100">
                <p className="text-xl font-bold ">Receive</p>
                <div className="flex items-center justify-between mt-5">
                    <input type="number" placeholder="the amount you get ..." 
                        className="text-xl p-4 focus:border-amber-500 focus:border-2 outline-none rounded"
                        value={receiveAmount}
                        onChange={handleReceive}
                        step={0.001}
                    />
                    
                    <SelectCrypto
                        triggerPopUp={
                            <button className="shadow-lg bg-white p-2 flex items-center space-x-2 rounded-full
                            hover:-translate-y-1 active:scale-95 transition duration-150 transform ease-out">
                                <Image src={cryptoDetails[crypto].logo} height={40} width={40} />
                                <p className="text-lg font-bold">{crypto}</p>
                            </button>
                        }
                        setCrypto={setCrypto}
                    />  
                    
                </div>
            </div>

            {/* Continue */}
            <button 
                disabled={purchaseAmount < currencyDetails[currency].min}
                className={`rounded border-2 border-slate-500 bg-amber-400 font-bold py-2 px-4 w-3/6 place-self-center
                    ${purchaseAmount < currencyDetails[currency].min && "bg-gray-300 text-black opacity-30"}
                `}
            >
                Continue
            </button>

        </div>
    );
    };

export default BuyCyptoCard;
