import Head from "next/head";
import Box from "../../components/3Dmodels/Box";
import NFTProduct from "../../components/product/NFTProduct";
import OwnershipCard from "../../components/product/OwnershipCard";
import TransactionCard from "../../components/product/TransactionCard";
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";


const product = ({product,owner,creator}) => {
    const router= useRouter();
    const {productId,creatorWalletAddress,nftName,blockchain,blockchainImage,price,unit,ownerWalletAddress} = product;
    const Model3D = dynamic(() => import(`../../components/3Dmodels/${product.jsx}`))

    return (
        <div className="flex-col w-screen items-center justify-start">
            <Head>
                <title>{nftName}</title>
            </Head>

            {/* NFT product */}
            <NFTProduct Model={Model3D} nftName={nftName} />
            
            
            {/* NFT basic details */}   
            <div className="flex justify-around px-10">
                <OwnershipCard owner={owner} creator={creator} router={router} />
                <TransactionCard price={price} unit={unit} blockchainImage={blockchainImage} blockchain={blockchain} ownerWalletAddress={ownerWalletAddress} />
            </div>
    
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps(context) {
    let productId = context.params.productId

    const res = await fetch(`http://localhost:3000/api/products/${productId}`)
    const product = await res.json()

    const ownerRes = await fetch(`http://localhost:3000/api/profile/${product.ownerWalletAddress}`)
    const owner = await ownerRes.json()

    const creatorRes = await fetch(`http://localhost:3000/api/profile/${product.creatorWalletAddress}`)
    const creator = await creatorRes.json()


    return { props: { product ,owner,creator} }
}

export default product
