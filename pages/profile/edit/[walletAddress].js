import { useRouter } from 'next/router';
import { useState,useRef } from 'react';
import {LinkIcon} from '@heroicons/react/outline'
import Head from 'next/head';
const userImage = "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"

const logoSrc = {
    twitter:"https://www.crescentcityjewishnews.com/blog/wp-content/uploads/2021/01/Twitter-Logo.png",
    instagram:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
}

const EditProfilePage = ({userData}) => {
    const router = useRouter();
    const {walletAddress} = router.query;
    const {username,description,profileImage,socialNetworks} = userData
    const [image,setImage] = useState(null);
    const [createObjectURL,setCreateObjectURL] = useState(null);
    const [usernameInput, setUsernameInput] = useState("");
    const [bioInput, setBioInput] = useState("");
    const [twitterInput, setTwitterInput] = useState({ref:"",link:""});
    const [instagramInput, setInstagramInput] = useState({ref:"",link:""});
    const [linkInput, setLinkInput] = useState("");

    const handleSubmitData = () => {
        console.log(usernameInput,bioInput,twitterInput,instagramInput,linkInput)
        console.log(image);
        console.log(createObjectURL);
    }

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            
            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i))
        }
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
                src={createObjectURL || (userData.profilImage || userImage)} alt={userData.username} 
            />


            <input 
                type="file" 
                name="profile image"
                onChange={uploadToClient}
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
                            type="text" placeholder={"@yourRef on twitter"}
                            value={twitterInput.ref}
                            onChange={(e) => setTwitterInput({ref:e.target.value,link:twitterInput.link})}
                        />

                        {/*  link */}
                        <input className='p-2 border-2 border-slate-300 rounded outline-none text-gray-600 placeholder:text-gray-500 focus:border-blue-500'
                            type="text" placeholder={"www.twitter.com/@yourRef"}
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
                            type="text" placeholder={"your name on instagram"}
                            value={instagramInput.ref}
                            onChange={(e) => setInstagramInput({ref:e.target.value,link:instagramInput.link})}
                        />

                        {/*  link */}
                        <input className='p-2 border-2 border-slate-300 rounded outline-none text-gray-600 placeholder:text-gray-500 focus:border-blue-500'
                            type="text" placeholder={"www.instagram.com/@yourRef"}
                            value={instagramInput.link}
                            onChange={(e) => setInstagramInput({link:e.target.value,ref:instagramInput.ref})}
                        />
                    </div>
                </div>


                {/* Other link */}
                <div className='flex justify-start items-center space-x-10 px-5 py-2'>
                    <LinkIcon className='h-10' />
                        {/*  link */}
                        <input className='p-2 border-2 border-slate-300 rounded outline-none text-gray-600 placeholder:text-gray-500 focus:border-blue-500'
                            type="text" placeholder={"your other link"}
                            value={linkInput}
                            onChange={(e) => setLinkInput(e.target.value)}
                        />
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
