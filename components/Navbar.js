import {UserCircleIcon,LogoutIcon} from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/actions/userAction';
import Image from "next/image";
import metamaskLogo from "../public/image/metamask.png"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { connectAndDispatch } from '../controllers/connectWallet';

const Navbar = () => {
    const router = useRouter();
    const dispatch = useDispatch(); 
    const user = useSelector(state => state.user)

    const goToProfile = () => {
        router.push({
            pathname:'/profile/[walletAddress]',
            query: { 
                walletAddress:user.walletAddress,
            }
        })
    }

    const logout = () => {
        dispatch(logOut())
    }

    const logUserIn = () => {
        connectAndDispatch(dispatch,router);
    }

    return (
        <div className="fixed top-0 flex justify-between items-center shadow-md h-12 md:h-16 px-10 py-4 text-base lg:text-2xl 
            z-50 w-screen bg-gradient-to-r from-gray-100 to-slate-300">
            {/* Platform Logo */}
            <h1 className="hover:cursor-pointer font-bold" onClick={() => router.push("/")}>
                <span className='text-blue-500'>Free</span>
                <span className='text-amber-500'>Flow</span>
            </h1>

            {/* Right set */}
            <div className="flex items-center justify-end w-4/6 px-5 space-x-10 font-medium ">
                <p 
                    className='cursor-pointer transition duration-150 hover:-translate-y-1 hover:border-b-4 hover:border-amber-500 hover:text-blue-500'
                    onClick={() => router.push("/create-nft")}>
                        Create
                </p>
                {/* <p 
                    className='cursor-pointer'
                    onClick={() => router.push("/about")}>
                        About
                </p> */}
                <p
                    className='cursor-pointer transition duration-150 hover:-translate-y-1 hover:border-b-4 hover:border-amber-500 hover:text-blue-500'
                >
                        Feedback
                </p>
                
                {/* User Profile Button or Connect Wallet Button */}
                {user.walletAddress ? (
                    <div className='flex items-center space-x-5'>
                        {user?.profileImage ? (
                            <div className='flex justify-center items-center space-x-2 cursor-pointer
                             border-slate-500 bg-gray-100 rounded-full border-2 p-2 hover:-translate-y-1 hover:bg-amber-500 
                                transition transform duration-200 ease-out w-fit active:scale-95'
                                onClick={goToProfile}
                            >
                                <img 
                                    src={user.profileImage} 
                                    alt={user.username}
                                    className='rounded-full h-10'
                                />
                                <p className='text-xs md:text-base'>
                                    {user.username}
                                </p>
                            </div>
                            
                        ) : (
                            <UserCircleIcon 
                                className='h-6 lg:h-8 cursor-pointer hover:bg-amber-500 rounded-full transition transform duration-300 ease-out' 
                                onClick={goToProfile}
                            />
                        )}
                        
                        <button 
                            className='flex justify-center items-center text-sm lg:text-base hover:shadow-xl hover:bg-black border-2 border-slate-500 hover:text-white 
                            rounded px-2 transition transform duration-300 ease-out space-x-1'
                            onClick={logout}
                            >
                            <LogoutIcon className='h-8' />
                            <p>Log Out</p> 
                        </button>
                    </div>
                    
                ) : (
                    <Popup 
                        trigger={
                            <button 
                                className="px-4 py-2 border-1 font-medium rounded-full bg-amber-500 text-sm lg:text-base
                                hover:scale-105 transform transition duration-150 ease-out flex justify-center items-center space-x-2">
                                Connect Wallet
                            </button>} 
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
                )}
                
            </div>
        </div>
    )
}


export default Navbar
