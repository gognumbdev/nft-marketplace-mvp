import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NFTCard = ({productId,owner,nftName,nftContract,tokenId,blockchain,blockchainImage,price,unit,ownerWalletAddress}) => {
    const router = useRouter();
    const [userData, setUserData] = useState({});   

    const goToProduct = () => {
        router.push({
            pathname: '/product/[productId]',
            query: { 
                productId:productId,
            },
        })
    }
    
    const goToNFTPage = () => {
        router.push({
            pathname: '/asset/[nftContract]/[tokenId]',
            query: { 
                nftContract:nftContract,
                tokenId:tokenId
            },
        })
    }

    useEffect( async () => {
            const res = await fetch(`http://localhost:3000/api/profile/${ownerWalletAddress}`)
            const data = await res.json()
            setUserData(data);
    },[])

    return (
        <div 
            className="place-self-center mt-2 border-1 px-4 py-1 shadow-xl flex-col rounded-xl h-fit  
            hover:-translate-y-2 cursor-pointer transform transition duration-300 ease-out active:scale-95 bg-white w-4/6 space-y-4"
            // onClick={goToProduct}
            onClick={goToNFTPage}
        >   
            <p className="text-xl lg:text-2xl font-bold truncate border-b-2 py-2">{nftName} </p>

            <div className="mt-2 flex justify-start items-center space-x-2">
                <img src={userData.profileImage} alt={owner} className="h-9 rounded-full" />
                <p className="text-base lg:text-lg font-medium">{owner}</p>
            </div>

            <div className="flex justify-between">
                <div className="flex items-center justify-start space-x-1">
                    <p className="text-base lg:text-lg font-medium">Price</p>
                    <img src={blockchainImage} alt={blockchain} className="h-5 rounded-full"/>
                </div>

                <div className="flex space-x-1 text-base lg:text-lg font-medium ">
                    <p>{price}</p>
                    <p>{unit}</p>
                </div>
            </div>
        
        </div>
    )
}

export default NFTCard
