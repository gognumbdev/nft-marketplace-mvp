import NFTSet from '../../components/NFTSet'
import Image from 'next/image'
import Head from 'next/head'

const product_data = {
    image:"https://lh3.googleusercontent.com/T_QvX8TVs6KczTHtXX8OMLVpiyDCvVKLmAczU4bdDZ0OSNVk-G7kGov9VV0MB3WIMFCA_nLXM5G7BjzxJ2IBxgTz5z__DfKKO3Pn=w600",
    username:"poom_jirayu",
    profileImage:"https://lh3.googleusercontent.com/OrUmaANKu0q3Eq7JjPj2GHU3kLQ6hIswAF2giK4R4wAodzva95XTp_vFJ2NjsUPd18AS8WJlARtRV0CY8mDa_QQjN4XAz8mnNJnA=s0",
    nftName:"BER_JUNK_warrior_no5",
    blockchain:"polygon",
    blockchainImage:"https://pbs.twimg.com/profile_images/1401931168056967175/q4itcBEb_400x400.jpg",
    price:"28.09",
    unit:"Matic",
  }

const user_data = {
    username: "Poom_Jirayu",
    walletId: "45654dvswe4r65xase5654",
    profileImage: "/profile_img/poom.png",
    description: "Hello I'm Graphic Designer / Character Designer ,and this is My Original Character , Thank you !Joined July 2021",
    socialNetworks: [{
            name: "twitter",
            value: "jirayupoom",
            link: "https://twitter.com/jirayupoom"
        },
        {
            name: "instagram",
            value: "poom_jirayu_",
            link: "https://www.instagram.com/poom_jirayu_/"
        }
    ]
}

const ProfilePage = () => {
    return (
        <div className="p-6 space-y-6">
            <Head>
                <title>{user_data.walletId}</title>
            </Head>
            <ProfileInfo {...user_data}/>
            <NFTSet data={product_data}/>
        </div>
    )
}

const ProfileInfo = (props) => {
    const minimizeWalletId = (walletId) => {
        const halfLength = 4
        return walletId.slice(0, halfLength) + "..." + walletId.slice(-halfLength-1, -1)
    }
    return (
        <div className="p-6 grid justify-items-center space-y-2">
            <Image 
                className="rounded-full"
                src={props.profileImage}
                alt="user's profile picture"
                width="150px"
                height="150px"/>
            <p className="text-xl font-bold">{props.username}</p>
            <p className="text-sm font-thin">{minimizeWalletId(props.walletId)}</p>
            <p className="max-w-sm text-center text-sm">{props.description}</p>
            <SocialNetworkBar socialNetworks={props.socialNetworks}/>
        </div>
    )
}

const SocialNetworkBar = (props) => {
    return (
        <div className="flex flex-row space-x-10 justify-center">
            {props.socialNetworks.map((socialNetworkInfo, idx) => {
                return <SocialNetworkButton key={idx} {...socialNetworkInfo}/>
            })}
        </div>
    )
}

const SocialNetworkButton = (props) => {
    const getSocialNetworkIcon = () => {
        return "/icons/" + props.name + ".png"
    }
    return (
        <a 
            href={props.link}
            target="_blank"
            rel="noreferrer">
            <div className="flex flex-row space-x-3">
                <Image src={getSocialNetworkIcon()} width="36px" height="36px" alt={props.name}/>
                <p className="text-blue-500 pt-1">{props.value}</p>
            </div>
        </a>
    )
}
export default ProfilePage
