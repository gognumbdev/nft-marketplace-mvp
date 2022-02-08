import Popup from "reactjs-popup"
import Image from "next/image";
import metamaskLogo from "../../public/image/metamask.png"

const LogInPopUp = ({router,logUserIn,triggerPopUp}) => {
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
            <div className="grid grid-cols-1 justify-start">
                <p className="text-4xl font-bold mb-5 place-self-center">Connect Wallet</p>
                <p className="">Connect your crypto wallet with the one you have the account.</p>
                <p>Sorry for your inconvenient we have only 
                    <span
                        className='px-1 text-amber-500 font-bold cursor-pointer text-lg'
                        onClick={() => router.push("https://metamask.io/")}
                    > MetaMask 
                    </span> 
                    wallet for now.
                </p>
            </div>
            
            {/* Set of Crypto Wallet for user to cennect*/}
            <div 
                className="shadow-xl w-4/6 md:w-3/6 bg-white mt-5 p-2 "            
            >
                <div 
                    className="flex space-x-5 rounded justify-start items-center transform transition duration-150 ease-in
                    hover:scale-105 hover:shadow-xl cursor-pointer active:scale-90 border-2 border-gray-300 "
                    onClick={logUserIn}
                >
                    <Image 
                        height={60}
                        width={60}
                        src={metamaskLogo}
                        objectFit="cover" 
                        alt="Logo of Metamask wallet"
                    />
                    <p className="text-xl">MetaMask</p>
                </div>

            </div>
        </div>
        
    )}
    </Popup>
    );
};

export default LogInPopUp;

