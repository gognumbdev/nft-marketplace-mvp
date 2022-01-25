import Head from "next/head";
import Box from "../../components/3Dmodels/Box";
import NFTProduct from "../../components/product/NFTProduct";
import OwnershipCard from "../../components/product/OwnershipCard";
import TransactionCard from "../../components/product/TransactionCard";
import dynamic from 'next/dynamic'


const product = ({product}) => {
    console.log(product);
    const {productId,owner,creator,ownerImage,creatorImage,nftName,blockchain,blockchainImage,price,unit,story} = product;
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
