import { useEffect, useState } from "react";
import SelectCurrency from "./SelectCurrency"
import SelectCrypto from "./SelectCrypto"
import ETHLogo from "../../public/icons/crypto/ethereum.png"
import PolygonLogo from "../../public/icons/crypto/polygon.png"
import THBLogo from "../../public/icons/currency/THB.png"
import USDLogo from "../../public/icons/currency/USD.png"
import Image from "next/image"

const SellCryptoCard = () => {
    const [spendAmount, setSpendAmount] = useState(0);
    const [receiveAmount, setReceiveAmount] = useState(0);
    const [currency, setCurrency] = useState("THB");
    const [crypto, setCrypto] = useState("ETH");
    const [balance,setBalance] = useState({
        crypto:"ETH",
        amount:500,
    });
    
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

    let userBalanceData = {
        "ETH":{
            crypto:"ETH",
            amount:50
        },
        "Matic":{
            crypto:"Matic",
            amount:1000
        }
    }

    useEffect(() => {
        setReceiveAmount(spendAmount*currencyDetails[currency][crypto]);
        setBalance(userBalanceData[crypto]);
    }, [currency,crypto]);
    
    
    const handleSpend = (event) => {
        let spendInput = event.target.value;
        let fiatToCrypto = currencyDetails[currency][crypto]
        setSpendAmount(spendInput);
        setReceiveAmount(spendInput*fiatToCrypto)
    }

    const handleCurrencyChange = (currencySymbol) => {
        setReceiveAmount(spendAmount/currencyDetails[currency][crypto]);
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
                ${balance.amount >= spendAmount && spendAmount > 0 ? "border-green-500 " : ( spendAmount == 0 ? "" :  "border-red-500 ")} `}
            >
                <div className="flex justify-between">
                   <p className="text-xl font-bold">Spend</p> 
                   <div className="flex space-x-2 text-gray-600 font-bold">
                        <p className="">Balance : </p>
                        <p className=""> {balance.amount} {crypto}</p>
                   </div>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <input type="number" placeholder={`1 - ${balance.amount} ${crypto}`} min={0} max={balance.amount}
                        className="text-xl p-4 focus:border-amber-5handleSpend00 focus:border-2 outline-none rounded w-4/6"
                        onChange={handleSpend}
                        value={spendAmount}
                        step={balance.amount/100}
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

            {/* Details */}
            <div className="px-4">
                {balance.amount >= spendAmount && spendAmount > 0   ? (
                    <p className="text-green-500">Sufficient Balance</p>
                ) : (
                    spendAmount > 0 && <p className="text-red-500"> Insufficient Balance</p>
                )}
            </div>

            {/* Receive */}
            <div className="p-4 rounded shadow-lg  border-2 hover:border-amber-500  bg-slate-100">
                <p className="text-xl font-bold ">Receive</p>
                <div className="flex items-center justify-between mt-5">
                    <p className="text-xl p-4 rounded bg-white w-4/6">
                        {receiveAmount}
                    </p>
                    
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

            {/* Continue */}
            <button 
                disabled={balance.amount < spendAmount}
                className={`rounded border-2 border-slate-500 bg-amber-400 font-bold py-2 px-4 w-3/6 place-self-center
                    ${balance.amount < spendAmount || spendAmount===0 && "bg-gray-300 text-black opacity-30"}
                `}
            >
                Continue
            </button>

        </div>
    );
    };

export default SellCryptoCard;
