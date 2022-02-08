import Head from "next/head";
import NFTProduct from "../../components/product/NFTProduct";
import OwnershipCard from "../../components/product/OwnershipCard";
import TransactionCard from "../../components/product/TransactionCard";
import { PencilIcon } from "@heroicons/react/outline";
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import ProductDescription from "../../components/product/ProductDescription";
import { useSelector } from "react-redux";


const product = ({product}) => {
    const router= useRouter();
    const {creatorWalletAddress,nftContract,nftName,description,blockchain,blockchainImage,price,unit,ownerWalletAddress} = product;
    const Model3D = dynamic(() => import(`../../components/3Dmodels/${product.jsx}`))
    const user = useSelector(state => state.user)
    
    const goToEditItemPage = () => {
        router.push({
            pathname:"/product/edit/[nftContract]",
            query: { 
                nftContract:nftContract,
            }
        })
    }

    return (
        <div className="grid grid-cols-1 w-screen items-center justify-start">
            <Head>
                <title>{nftName}</title>
            </Head>
            
            {user.walletAddress === ownerWalletAddress && (
                <div className="shadow-xl items-center bg-white w-fit p-2 rounded-full transition transform duration-150 ease-out
                     hover:scale-105 cursor-pointer flex space-x-5 place-self-center"
                    onClick={goToEditItemPage}
                >
                    <PencilIcon className="h-10 p-2 " />
                    <p>Edit Item Info</p> 
                </div>
            )}
            
            {/* NFT product */}
            <NFTProduct Model={Model3D} nftName={nftName} blockchain={blockchain} nftContract={nftContract}  />

            {/* NFT basic details */}   
            <div className="flex justify-around px-10">
                <OwnershipCard router={router} ownerWalletAddress={ownerWalletAddress} creatorWalletAddress={creatorWalletAddress}/>
                <TransactionCard nftData={product} />
            </div>
            
            {/* Product Description */}
            <ProductDescription description={description} />


        </div>
    )
}

// This gets called on every request
export async function getServerSideProps(context) {
    let productId = context.query.productId
    const res = await fetch(`http://localhost:3000/api/products/${productId}`)
    const product = await res.json()

    return { props: { product } }
}

export default product
