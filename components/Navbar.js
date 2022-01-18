import {
    UserCircleIcon,
} from '@heroicons/react/outline'
import { useRouter } from 'next/router'



const Navbar = () => {
    const router = useRouter();

    // const goToProfile = () => {
    //     router.push({
    //         pathname: '/blog/[blogTopic]',
    //         query: { 
    //             blogCategory:category,
    //             blogTopic: topic,
    //             blogImg:img,
    //             blogDate:date,
    //             blogArticle:article
    //         },
    //     })
    // }

    return (
        <div className="flex justify-between items-center sticky top-0 border-2 shadow-md h-12 px-10 py-4 text-slate-800 text-bold lg:text-2xl z-50 bg-white w-screen">
            <h1 className="hover:cursor-pointer" onClick={() => router.push("/")}>Freeflow</h1>
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
                <button className="px-2 py-1 border-1 rounded-xl bg-amber-500 text-white text-xs lg:text-sm hover:scale-105 transform transition duration-150 ease-out">Connect Wallet</button>
                {/* <UserCircleIcon className='h-8 '/>     */}
                {/* Man Icon to go to profile page*/}
            </div>
        </div>
    )
}

export default Navbar
