import Head from "next/head";
import Image from "next/image";
import metamaskLogo from "../public/image/metamask.png"
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/action";
import { useState } from "react";

const login = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    // const [address, setAddress] = useState("");
    // const [balance, setBalance] = useState(0.0);
    // const [network,setNetwork] = useState({});

    const connectAndDispatch = () => {
            connectWallet().then(({userAddress,userBalance,userNetwork}) => {
                console.log("Result then :",userAddress,userBalance,userNetwork);
                dispatch(logIn(
                    {
                        username: "username",
                        walletAddress: userAddress,
                        balance:userBalance,
                        network:userNetwork,
                        profileImage: "", 
                        description: "user desciption",
                        socialNetworks: [
                            {
                                name: "twitter",
                                value: "user twitter",
                                link: "https://twitter.com"
                            },
                            {
                                name: "instagram",
                                value: "user instagram",
                                link: "https://www.instagram.com"
                            },
                        ],
                    }
                ))
                router.push("/")
            })
    }

    const connectWallet = async () => {
        
        if (typeof window !== "undefined") {
            const {ethereum} =window;
            
            await ethereum.enable()
        
            //* Get user log in with Metamask wallet 
            const provider = new ethers.providers.Web3Provider(ethereum)
            const signer =  provider.getSigner();
            const userNetwork = await provider.getNetwork();
            const userAddress = await signer.getAddress();
            // const userAddress = await ethereum.request({ method: 'eth_accounts' });
            const userBalance = await signer.getBalance()
            
            console.log("request result:",userNetwork,userAddress,userBalance);
            
            return ({userNetwork,userAddress,userBalance})
            //* set local state
            // setNetwork(userNetwork);
            // setAddress(userAddress);
            // setBalance(ethers.utils.formatEther(userBalance));
        }
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
                    className="flex space-x-5 rounded justify-start items-center transform transition duration-150 ease-in hover:scale-y-105 hover:shadow-xl cursor-pointer"
                    onClick={connectAndDispatch}
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
