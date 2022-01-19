import {
    UserCircleIcon,
} from '@heroicons/react/outline'
import { useRouter } from 'next/router'



const Navbar = () => {
    const router = useRouter();

    return (
        <div className="fixed top-0 flex justify-between items-center shadow-md h-12 px-10 py-4 text-bold lg:text-2xl z-50 w-screen bg-gradient-to-r from-gray-100 to-slate-300">
            <h1 className="hover:cursor-pointer text-2xl font-bold" onClick={() => router.push("/")}>
                <span className='text-blue-500'>Free</span>
                <span className='text-amber-500'>Flow</span>
            </h1>
            <div className="flex items-center justify-between w-3/6 lg:w-2/6 px-5 text-sm lg:text-base">
                <p 
                    className='hover:cursor-pointer'
                    onClick={() => router.push("/create-nft")}>
                        Create
                </p>
                <p
                    className='hover:cursor-pointer'
                >
                        Feedback
                </p>
                <button className="px-2 py-2 border-1 font-medium rounded bg-amber-500 text-xs lg:text-sm 
                                    hover:scale-105 transform transition duration-150 ease-out">
                    Connect Wallet
                </button>
                {/* <UserCircleIcon className='h-8 '/>     */}
                {/* Man Icon to go to profile page*/}
            </div>
        </div>
    )
}

export default Navbar
