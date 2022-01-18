import OwnershipCard from "../../components/product/OwnershipCard";
import TransactionCard from "../../components/product/TransactionCard";

const product = ({product}) => {
    const {productId,image,owner,creator,ownerImage,nftName,blockchain,blockchainImage,price,unit,offering} = product;
   console.log(product)
    return (
        <div className="flex-col w-screen h-full items-center">
            {/* NFT basic details */}
            <div className="">
                {/* NFT product */}
                <img src={image} alt={nftName} className="w-80 h-80" />

                <div className="">
                    {/* Owner and Creator */}
                    <OwnershipCard nftName={nftName} owner={owner} ownerImage={ownerImage} creator={creator} />

                    {/* Tansaction and Offer */}
                    <TransactionCard price={price} offering={offering} />
                </div>
            </div>

            {/* NFT insights */}
            <div>

            </div>
        </div>
    )
}

export async function getStaticPaths() {
    // Fetch products data for the landing page by request to "http://localhost:3000/api/products" route.
    const res = await fetch("http://localhost:3000/api/products")
    const products = await res.json();

    const paths = products.map(nft => (
            {
                params:{ productId:nft.productId.toString() }
            }
        )
    ) 

    return {
      paths,
      fallback: false
    };
}

export async function getStaticProps(context) {
    const productId = context.params.productId;
    // Fetch products data for the landing page by request to "http://localhost:3000/api/products" route.
    const res = await fetch(`http://localhost:3000/api/products/${productId}`);
    const product = await res.json();
  
    return {
      props: {
        product
      },
    }
}


export default product
