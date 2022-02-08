import Head from "next/head";
import { useState } from "react";
import BuyCyptoCard from "../components/exchange/BuyCyptoCard";
import SellCyptoCard from "../components/exchange/SellCryptoCard";

const exchange = () => {
    const [exchangeType, setExchangeType] = useState("buy");
        
    return (
        <div className="p-10 grid grid-cols-1">
            <Head>
                <title>Buy and Sell Crypto</title>
            </Head>
            <p className="text-2xl font-bold place-self-start px-20">Buy crypto with Credit/Debit card or Sell crypto to fiat currency</p>
            
            {/* Buy and Sell Card */}
        
            <div className="border-2 w-4/6 lg:w-3/6 place-self-center h-fit bg-white rounded-xl mt-16 p-4 ">
                <div className="grid grid-cols-2 text-gray-500 place-items-center">
                    <p 
                        className={`flex justify-center cursor-pointer text-2xl p-2 font-bold w-full ${exchangeType === "buy" && "text-black border-b-4 border-amber-500"} `}
                        onClick={() => setExchangeType("buy")}
                    >
                        Buy
                    </p>
                    <p 
                        className={`flex justify-center cursor-pointer text-2xl p-2 font-bold w-full ${exchangeType === "sell" && "text-black border-b-4 border-amber-500"} `}
                        onClick={() => setExchangeType("sell")}
                    >
                            Sell
                    </p>
                </div>
                
                {exchangeType === "buy" ? (
                    <BuyCyptoCard />
                ) : (
                    <SellCyptoCard />
                )}
            </div>

        </div>
    )
};

export default exchange;
