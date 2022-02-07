import SelectCurrency from "./SelectCurrency"

const BuyCyptoCard = () => {
  return (
    <div className="grid grid-cols-1 space-y-5 p-5">
        {/* price Crypto to fiat */}
        <p className="flex space-x-2 text-gray-400 place-self-center">
            <span>1 ETH ≈ </span>
            <span>100000 THB</span>
        </p>
        
        {/* Purchase */}
        <div className="p-4 rounded shadow-lg  border-2 hover:border-amber-500  bg-slate-100">
            <p className="text-xl font-bold ">Purchase</p>
            <div className="flex items-center justify-between mt-5">
                <input type="text" placeholder="500-1500 THB" 
                    className="text-xl p-4 focus:border-amber-500 focus:border-2 outline-none rounded"
                >
                    
                </input>
                
                <SelectCurrency />  
                
            </div>
        </div>

        {/* Receive */}

        {/* Continue */}


    </div>
  );
};

export default BuyCyptoCard;
