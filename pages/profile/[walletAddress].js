import Head from 'next/head'
import ProfileInfo from '../../components/profile/ProfileInfo'
import ProfileDetails from '../../components/profile/ProfileDetails'

const ProfilePage = ({userData}) => {
    const {username,walletAddress,description,socialNetworks,profileImage} = userData
    
    return (
        <div className="p-6 space-y-6">
            <Head>
                <title>{walletAddress}</title>
            </Head>

            <main className='grid grid-cols-1 place-items-center'>
                {/* Profile Info */}
                <ProfileInfo 
                    username={username} 
                    walletAddress={walletAddress}   
                    description={description}
                    socialNetworks={socialNetworks}
                    profileImage={profileImage}
                />
                
                {/* ProfileDetail  */}
                <ProfileDetails userData={userData} />
                
            </main>  
            
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps(context) {
    let address = context.params.walletAddress;
    const res = await fetch(`http://localhost:3000/api/profile/${address}`)
    const userData = await res.json()

    return { props: { userData } }
}

export default ProfilePage
