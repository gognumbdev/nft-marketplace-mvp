import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import { Suspense } from "react";
import Box from "../../components/3Dmodels/Box";
import NFTInsight from "../../components/product/NFTInsight";
import NFTProduct from "../../components/product/NFTProduct";
import OwnershipCard from "../../components/product/OwnershipCard";
import TransactionCard from "../../components/product/TransactionCard";

const product = ({product}) => {
    const {productId,image,owner,creator,ownerImage,creatorImage,nftName,blockchain,blockchainImage,price,unit,story,offering} = product;
    return (
        <div className="flex-col w-screen items-center justify-start">
            <Head>
                <title>{nftName}</title>
            </Head>

            {/* NFT product */}
            <NFTProduct Model={Box} nftName={nftName} />
            
            
            {/* NFT basic details */}   
            <div className="flex justify-around px-10">
                <OwnershipCard owner={owner} ownerImage={ownerImage} creator={creator} creatorImage={creatorImage}/>
                <TransactionCard price={price} unit={unit} blockchainImage={blockchainImage} blockchain={blockchain} />
            </div>
    
        </div>
    )
}

export async function getStaticPaths() {
    // Fetch products data for the landing page by request to "http://localhost:3000/api/products" route.
    const res = await fetch("http://localhost:3000/api/products")
    const products = await res.json();
    const paths = products.map(nft => ({ params:{productId:nft.productId.toString()} })) 
    return {paths,fallback: false};
}

export async function getStaticProps(context) {
    const productId = context.params.productId;
    // Fetch products data for the landing page by request to "http://localhost:3000/api/products" route.
    const res = await fetch(`http://localhost:3000/api/products/${productId}`);
    const product = await res.json();
  
    return {props: {product}}
}

export default product
