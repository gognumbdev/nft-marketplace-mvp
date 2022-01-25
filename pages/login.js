import Head from "next/head";
import Image from "next/image";
import metamaskLogo from "../public/image/metamask.png"
import { ethers } from "ethers";
import { useRouter } from "next/router";

const login = () => {
    const router = useRouter();
    // if (typeof window !== "undefined") {
    //     const {ethereum} =window;
    //     // Initial Check prepare for connecct to MetaMask.
    //     ethereum.isMetaMask ? console.log("MetaMask is install"): alert("Please install MetaMask extension on your browser.") 
    //     ethereum.isConnected() ? console.log("MetaMask is connected"): console.log("MetaMask is not connected.") 
    // }
    
    const connectWallet = async () => {
        if (typeof window !== "undefined") {
            const {ethereum} =window;
            
            //* Initial Check prepare for connecct to MetaMask.
            if(ethereum.isMetaMask){
                console.log("MetaMask is install") 
            }else{
                alert("Please install MetaMask extension on your browser.") ;
                return
            }
            
            if(ethereum.isConnected()){
                console.log("MetaMask is already connected.") 
                router.push("/")
                return
            }
            
            
            //* A Web3Provider wraps a standard Web3 provider, which is
            //* what MetaMask injects as window.ethereum into each page
            const provider = new ethers.providers.Web3Provider(ethereum)
            const signer = provider.getSigner();
            
            // const account = await provider.send("eth_requestAccounts", []);
            // getNetwork() =>
            // { chainId: 1,
            //   ensAddress: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
            //   name: 'homestead'
            // }

            const network = await provider.getNetwork();
            const address = await signer.getAddress();
            // const resolver = await provider.getResolver(network.name);
            // const balance = await provider.getBalance(network.ensAddress);            
            console.log("sign in !");
            console.log(network);
            console.log(address);
            
            // console.log(resolver.name);
            // console.log(resolver.address);
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
                    onClick={connectWallet}
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
