import Head from "next/head";
import Image from "next/image";
import metamaskLogo from "../public/image/metamask.png"
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { connectAndDispatch } from "../controllers/connectWallet";

const login = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const logUserIn = () => {
        connectAndDispatch(dispatch,router);
    }

    return (
        <div className="w-full grid grid-cols-1 h-screen gap-y-4 content-start place-items-center">
            <Head>
                <title>Connect Wallet</title>
            </Head>

            <div className="grid grid-cols-1 justify-start">
                <p className="text-4xl font-bold">Connect Wallet</p>
                <p className="text-base">Connect your crypto wallet with the one you have the account.</p>
            </div>
            
            <div 
                className="shadow-xl w-4/6 md:w-3/6 bg-white mt-5 p-2 rounded"            
            >
                <div 
                    className="flex space-x-5 rounded justify-start items-center transform transition duration-150 ease-in
                    hover:scale-y-105 hover:shadow-xl cursor-pointer active:scale-90"
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
    )
  
};

export default login;
