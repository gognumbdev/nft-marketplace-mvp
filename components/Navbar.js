import {UserCircleIcon,LogoutIcon,CashIcon} from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/actions/userAction';
import 'reactjs-popup/dist/index.css';
import { connectAndDispatch } from '../controllers/connectWallet';
import LogInPopUp from './utils/LogInPopUp';

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

    const goToCreate = () => {
        if(user.walletAddress){
            router.push("/create");
        }
    }

    const logout = () => {
        dispatch(logOut())
    }

    const logUserIn = () => {
        connectAndDispatch(dispatch,router);
    }
    
    const goToExchange  = () => {
        router.push({
            pathname:'/exchange',   
        })
    }

    return (
        <div className="fixed top-0 flex justify-between items-center shadow-md h-12 md:h-16 px-10 py-4 text-base lg:text-2xl 
            z-50 w-screen bg-gradient-to-r from-gray-100 to-slate-300">
            {/* Platform Logo */}
            <div className='flex items-center justify-start space-x-10'>
                {/* Logo */}
                <h1 className="hover:cursor-pointer font-bold" onClick={() => router.push("/")}>
                    <span className='text-blue-500'>Free</span>
                    <span className='text-amber-500'>Flow</span>
                </h1>

                {/* Exhange */}
                {user?.walletAddress ? (
                    <div 
                        className='flex p-2 bg-amber-400 rounded border-2 border-black cursor-pointer transition duration-200 transaform ease-out hover:scale-105'
                        onClick={goToExchange}>
                        <p className='text-xl font-bold  '>Buy and Sell Crypto</p>
                    </div>
                ) : (
                    <LogInPopUp
                        router={router} logUserIn={logUserIn} 
                        triggerPopUp={
                            <div className='flex p-2 bg-amber-400 rounded border-2 border-black cursor-pointer transition duration-200 transaform ease-out hover:scale-105'>
                                <p className='text-xl font-bold  '>Buy and Sell Crypto</p>
                            </div>
                        }
                    />
                )}
              
            </div>
            

            {/* Right set */}
            <div className="flex items-center justify-end w-4/6 px-5 space-x-10 font-medium ">
                {user?.walletAddress 
                    ? (
                        <p 
                            className='cursor-pointer transition duration-150 hover:-translate-y-1 hover:border-b-4 hover:border-amber-500 hover:text-blue-500'
                            onClick={goToCreate}>
                                Create
                        </p>
                    ) : (
                            
                            <LogInPopUp 
                                router={router} logUserIn={logUserIn} 
                                triggerPopUp={
                                    <p 
                                        className='cursor-pointer transition duration-150 hover:-translate-y-1 hover:border-b-4 hover:border-amber-500 hover:text-blue-500'
                                        >
                                            Create
                                    </p>
                                } 
                            />
                    )
                }
                
               
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
                             border-slate-500 bg-gray-100 rounded-full border-2 p-2 hover:-translate-y-1
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
                   <LogInPopUp 
                    router={router}
                    logUserIn={logUserIn}
                    triggerPopUp={<button 
                        className="px-4 py-2 border-1 font-medium rounded-full bg-amber-400 text-sm lg:text-base
                        hover:scale-105 transform transition duration-150 ease-out flex justify-center items-center space-x-2">
                        Connect Wallet
                    </button> }    
                   />
                )}
                
            </div>
        </div>
    )
}


export default Navbar
