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
        router.push("/create");
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
            z-50 w-screen">
            {/* Platform Logo */}
            <div className='flex items-center justify-start space-x-10'>
                {/* Logo */}
                <h1 className="hover:cursor-pointer font-bold" onClick={() => router.push("/")}>
                    <span className='text-blue-500'>Free</span>
                    <span className='text-amber-500'>Flow</span>
                </h1>
            </div>

            {/* Navbar Menu */}
            <div className='flex w-3/6 justify-between items-center'>
                {/* Exhange */}
                <div className='flex p-2 cursor-pointer transition duration-200 transaform ease-out hover:scale-105'
                    onClick={goToExchange}>
                    <p className='text-xl font-bold'>Buy and Sell Crypto</p>
                </div>
               
                
                <p className='cursor-pointer transition duration-150'
                    onClick={goToCreate}>
                    Create
                </p>
                
               
                <p className='cursor-pointer'
                    onClick={() => router.push("/about")}>
                        About
                </p>
                <p
                    className='cursor-pointer transition duration-150 '
                >
                        Feedback
                </p>
                
            </div>

            {/* User Authentication */}
            <div className='flex items-center justify-between space-x-6'>
                <button className=''
                    onClick={() => router.push("/auth/signin")}>
                    Sign In
                </button>

                <button 
                    className='border-2 bg-amber-400 p-2 rounded-lg hover:-translate-y-1 transition duration-150 '
                    onClick={() => router.push("/auth/signup")}>
                    Get Started    
                </button>

            </div>
        </div>
    )
}


export default Navbar
