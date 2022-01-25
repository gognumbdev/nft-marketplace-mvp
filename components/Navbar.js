import {
    UserCircleIcon,
} from '@heroicons/react/outline'
import { ethers } from 'ethers';
import { useRouter } from 'next/router'
import { useState } from 'react';


const Navbar = () => {
    const router = useRouter();
    const [address, setAddress] = useState("");
    
    if (typeof window !== "undefined") {
        const {ethereum} = window
        const getUserData = async () => {
            const provider = new ethers.providers.Web3Provider(ethereum)
            const signer = provider.getSigner();
            const userAddress = await signer.getAddress();
            // const account = await provider.send("eth_requestAccounts", []);
            // setAddress(account[0]);
            setAddress(userAddress);

        }

        // run only when user need to log in. 

        if (ethereum.isConnected()) {
            getUserData();
        }

        window.ethereum.on('accountChanged',() => window.location.reload());


    }

    const goToProfile = () => {
        router.push({
            pathname:'/profile/[uid]',
            query: { 
                uid:address,
            }
        })
    }

    const logout = () => {
        setAddress("");
    }

    return (
        <div className="fixed top-0 flex justify-between items-center shadow-md h-12 md:h-16 px-10 py-4 text-base lg:text-2xl 
            z-50 w-screen bg-gradient-to-r from-gray-100 to-slate-300">
            <h1 className="hover:cursor-pointer font-bold" onClick={() => router.push("/")}>
                <span className='text-blue-500'>Free</span>
                <span className='text-amber-500'>Flow</span>
            </h1>
            <div className="flex items-center justify-around w-3/6 px-5 space-x-10 ">
                <p 
                    className='cursor-pointer'
                    onClick={() => router.push("/create-nft")}>
                        Create
                </p>
                <p 
                    className='cursor-pointer'
                    onClick={() => router.push("/about")}>
                        About
                </p>
                <p
                    className='cursor-pointer'
                >
                        Feedback
                </p>
                
                {address ? (
                    <div className='flex items-center space-x-5'>
                        <UserCircleIcon 
                            className='h-6 lg:h-8 cursor-pointer hover:bg-amber-500 rounded-full  transition transform duration-300 ease-out' 
                            onClick={goToProfile}
                        />
                        <button 
                            className='text-sm lg:text-base hover:shadow-xl hover:bg-black border-2 border-slate-500 hover:text-white rounded p-2 hover:scale-95 transition transform duration-300 ease-out'
                            onClick={logout}
                            >
                            Log Out
                        </button>
                    </div>
                    
                ) : (
                    <button 
                        onClick={() => router.push("/login")}
                        className="px-2 py-2 border-1 font-medium rounded bg-amber-500 text-sm lg:text-base 
                        hover:scale-105 transform transition duration-150 ease-out">
                        Connect Wallet
                    </button>
                )}
                
                {/* <UserCircleIcon className='h-8 '/>     */}
                {/* Man Icon to go to profile page*/}
            </div>
        </div>
    )
}


export default Navbar
