import { useRouter } from "next/router";
import { useState } from "react";
import {PencilIcon} from '@heroicons/react/outline'
import { useSelector } from "react-redux";
  

const logoSrc = {
    twitter:"https://www.crescentcityjewishnews.com/blog/wp-content/uploads/2021/01/Twitter-Logo.png",
    instagram:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
}


const userImage = "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"

const ProfileInfo = ({username,walletAddress,description,profileImage,socialNetworks}) => {
    const router = useRouter();
    const [showAddress, setShowAddress] = useState(false);
    const user = useSelector(state => state.user)
    
    const goToEditProfile = () => {
        router.push({
            pathname:"/profile/edit/[walletAddress]",
            query:{walletAddress:user.walletAddress},
            state:{
                username,
                walletAddress,
                description,
                profileImage,
                socialNetworks
            }
        })
    }

    return (
    <div className="grid grid-cols-1 place-items-center space-y-4 w-8/12">
        {user.walletAddress === walletAddress && (
            <div 
                className="flex items-center w-fit h-fit space-x-2  bg-white rounded-full p-2 
                    cursor-pointer transition transform duration-300 ease-out hover:-translate-y-2"
                onClick={goToEditProfile}
            >
                <PencilIcon className="h-6" />
                <p>Edit Profile</p>
            </div>
        )}
        <img src={profileImage || userImage} alt={username} className="h-40 w-40 rounded-full object-cover" />
        <p className="p-2 text-2xl font-bold bg-white shadow-lg roundd ">{username}</p>
        <p className="text-base p-2 hover:text-blue-500 cursor-pointer shadow-xl bg-white rounded-full 
            transition transform duration-300 ease-out hover:-translate-y-2"
            onClick={() => setShowAddress(!showAddress)}
        >
                {showAddress ? walletAddress : walletAddress.slice(0,6)+"..."+walletAddress.slice(38,)}
        </p>
        <p className="py-5 w-8/12 lg:w-5/12 text-lg">{description}</p>
        <div className="flex justify-around space-x-5">
            {socialNetworks?.map(social => (
                <div 
                    className="flex p-2 space-x-1 justify-around items-center hover:text-blue-500 cursor-pointer shadow-xl
                     bg-white rounded-full transition transform duration-300 ease-out hover:-translate-y-2"
                    onClick={() => router.push(social.link)}
                >
                    <img src={logoSrc[social.name]} className="h-10 w-15 rounded-full object-cover "  />
                    <p>{social.value}</p>
                </div>
            ))}
        </div>
    </div>
    )
};


export default ProfileInfo;
