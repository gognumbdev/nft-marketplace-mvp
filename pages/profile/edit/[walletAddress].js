import { useRouter } from 'next/router';
import { useState } from 'react';
import {LinkIcon} from '@heroicons/react/outline'
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/actions/userAction';
import FileBase64 from 'react-file-base64';
import { useSelector } from 'react-redux';

const userImage = "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"

const logoSrc = {
    twitter:"https://www.crescentcityjewishnews.com/blog/wp-content/uploads/2021/01/Twitter-Logo.png",
    instagram:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
}

const EditProfilePage = ({userData}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector(state => state.user)
    const {walletAddress} = router.query;
    const {username,description,profileImage,socialNetworks} = userData
    let twitter = socialNetworks.find(obj => obj.name === "twitter")
    let instagram = socialNetworks.find(obj => obj.name === "instagram")
    let link = socialNetworks.find(obj => obj.name === "link")

    const [image,setImage] = useState(null);
    const [usernameInput, setUsernameInput] = useState(username || "");
    const [bioInput, setBioInput] = useState(description || "");
    const [twitterInput, setTwitterInput] = useState({ref:twitter?.value || "",link:twitter?.link || ""});
    const [instagramInput, setInstagramInput] = useState({ref: instagram?.value || "",link:instagram?.link || ""});
    const [linkInput, setLinkInput] = useState({ref: link?.value || "",link: link?.link || ""});

    const handleSubmitData = async () => {
        let editData = {usernameInput,bioInput,twitterInput,instagramInput,linkInput,image}
        
        let res = await fetch(`http://localhost:3000/api/profile/${walletAddress}`,{
            method:"POST",
            body:JSON.stringify(editData)
        });

        const data = await res.json()
        dispatch(logIn(
            {
                username: data.username,
                walletAddress: walletAddress,
                profileImage: data.profileImage ,
                balance:user.balance,
                network:user.network,
            }
        ))
        
        console.log("respond data :",data);

        router.push({
            pathname:'/profile/[walletAddress]',
            query: { 
                walletAddress:walletAddress,
            }
        })
    }

    return (
        <div className='p-10 grid grid-cols-1 place-items-center w-full '>
            <Head>
                <title>Edit Profile</title>
            </Head>

            <p className='text-4xl font-bold'>Edit Your Profile</p>
            
            <p className="flex space-x-10 items-center mt-10 text-base p-2 hover:text-blue-500 cursor-pointer shadow-xl bg-white rounded-full 
            transition transform duration-300 ease-out hover:-translate-y-2">
                <span className='text-2xl font-semibold'>Wallet Address : </span> 
                <span className='font-medium'>{walletAddress}</span>
            </p>

            {/* Image */}
            <img 
                className='h-40 w-40 mt-10'
                src={image || (userData.profilImage || userImage)} alt={userData.username} 
            />

            {/* Upload Image with react base 64  */}
            <FileBase64
                multiple={false}
                onDone={({base64}) => setImage(base64)}
            
            />

            {/* Username */}
            <div className='flex-col p-2 rounded space-y-2 bg-white mt-5 w-8/12'>
                <p className='text-2xl font-bold'>Username</p>
                <input className='p-2 border-2 border-slate-300 rounded outline-none text-gray-600 placeholder:text-gray-500 focus:border-blue-500 '
                    type="text" placeholder={username || "username"}
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                />
            </div>
            
            {/* Bio */}
            <div className='flex-col p-2 rounded space-y-2 bg-white mt-5 w-8/12'>
                <p className='text-2xl font-bold'>Bio</p>
                <textarea className='p-2 border-2 border-slate-300 rounded outline-none text-gray-600 placeholder:text-gray-500 w-8/12 focus:border-blue-500 '
                    type="text" placeholder={description || "your bio"}
                    value={bioInput}
                    onChange={(e) => setBioInput(e.target.value)}
                />
            </div>

            {/* Social network */}
            <div className='flex-col p-2 rounded space-y-2 bg-white mt-5 w-8/12 h-fit'>
                <p className='text-2xl font-bold'>Social Network or link</p>
                
                {/* Twitter */}
                <div className='flex justify-start items-center space-x-5 p-2'>
                    <img src={logoSrc.twitter} alt="twitter.com" className='h-10' />
                    <div className='grid grid-cols-1 space-y-2 '>
                        {/* User Ref */}
                        <input className='p-2 border-2 border-slate-300 rounded outline-none text-gray-600 placeholder:text-gray-500 focus:border-blue-500'
                            type="text" placeholder={twitterInput.ref || "@yourRef on twitter"}
                            value={twitterInput.ref}
                            onChange={(e) => setTwitterInput({ref:e.target.value,link:twitterInput.link})}
                        />

                        {/*  link */}
                        <input className='p-2 border-2 border-slate-300 rounded outline-none text-gray-600 placeholder:text-gray-500 focus:border-blue-500'
                            type="text" placeholder={twitterInput.link ||"www.twitter.com/@yourRef"}
                            value={twitterInput.link}
                            onChange={(e) => setTwitterInput({link:e.target.value,ref:twitterInput.ref})}
                        />
                    </div>
                </div>

                {/* Instagram */}
                <div className='flex justify-start items-center space-x-10 px-5 py-2'>
                    <img src={logoSrc.instagram} alt="instagram.com" className='h-10' />
                    <div className='grid grid-cols-1 space-y-2 '>
                        {/* User Ref */}
                        <input className='p-2 border-2 border-slate-300 rounded outline-none text-gray-600 placeholder:text-gray-500 min-w-fit focus:border-blue-500'
                            type="text" placeholder={instagramInput.ref || "your name on instagram"}
                            value={instagramInput.ref}
                            onChange={(e) => setInstagramInput({ref:e.target.value,link:instagramInput.link})}
                        />

                        {/*  link */}
                        <input className='p-2 border-2 border-slate-300 rounded outline-none text-gray-600 placeholder:text-gray-500 focus:border-blue-500'
                            type="text" placeholder={instagramInput.link || "www.instagram.com/@yourRef"}
                            value={instagramInput.link}
                            onChange={(e) => setInstagramInput({link:e.target.value,ref:instagramInput.ref})}
                        />
                    </div>
                </div>


                {/* Other link */}
                <div className='flex justify-start items-center space-x-10 px-5 py-2'>
                    <LinkIcon className='h-10' />
                        {/*  link */}
                        <div className='grid grid-cols-1 space-y-2 '>
                            {/* User Ref */}
                            <input className='p-2 border-2 border-slate-300 rounded outline-none text-gray-600 placeholder:text-gray-500 min-w-fit focus:border-blue-500'
                                type="text" placeholder={linkInput.ref || "yourRef link name"}
                                value={linkInput.ref}
                                onChange={(e) => setLinkInput({ref:e.target.value,link:linkInput.link})}
                            />

                            {/*  link */}
                            <input className='p-2 border-2 border-slate-300 rounded outline-none text-gray-600 placeholder:text-gray-500 focus:border-blue-500'
                                type="text" placeholder={linkInput.link || "www.example.com/yourRef"}
                                value={linkInput.link}
                                onChange={(e) => setLinkInput({link:e.target.value,ref:linkInput.ref})}
                            />
                        </div>
                </div>
            </div>

            {/* Submit Button */}
            <button 
                className='border-2 bg-blue-500 text-white text-2xl p-2 rounded mt-5 transition transform duration-200 ease-out 
                hover:scale-105 active:scale-95'
                type='submit'
                onClick={handleSubmitData}
            >
                Submit
            </button>
        </div>
    )
};

// This gets called on every request
export async function getServerSideProps(context) {
    let address = context.params.walletAddress;
    const res = await fetch(`http://localhost:3000/api/profile/${address}`)
    const userData = await res.json()

    return { props: { userData } }
}


export default EditProfilePage;
