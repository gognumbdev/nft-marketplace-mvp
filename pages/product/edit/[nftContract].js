import { useRouter } from "next/router";
import { useState } from "react";

const EditItemInfo = ({nftData}) => {
  const router = useRouter()
  const {nftContract} = router.query
  const {nftName,description,price,blockchain,blockchainImage,unit,productId} = nftData
  const [nameInput,setNameInput] = useState(nftName || '')
  const [descriptionInput, setDescriptionInput] = useState(description || "");
  const [priceInput,setPriceInput] = useState(price || 0)
  
  // this must be dynamicly in production
  let maticPerUSD = 1.55;

  const submitEditItemInfo = async () => {
    let editData = {nameInput,descriptionInput,priceInput}
        
    let res = await fetch(`http://localhost:3000/api/nft/${nftContract}`,{
        method:"POST",
        body:JSON.stringify(editData)
    });

    const data = await res.json()
    console.log("edit nft respond data :",data);

    router.push(`/product/${productId}`)
      
  }

  return (
    <div className="grid grid-cols-1 place-items-start px-20">
      <p className="text-4xl font-bold mb-5 place-self-center">Edit Item Info</p>

      <p className="text-xl font-bold mb-5">NFT Contract : {nftContract}</p>
      
      <div className="flex space-x-10 mb-5">
        <img  className="h-6" src={blockchainImage} alt={blockchain} />
        <p className=" text-xl font-medium">{blockchain} blockchain</p>
      </div>
      
      <div className="flex space-x-10 text-xl font-medium mb-5">
        <p>Price </p>
        <input 
          type="text" 
          value={priceInput}
          onChange={e => setPriceInput(e.target.value)}
        />
        <p>{unit}</p>
      </div>
      <p className="ml-20 text-gray-500 mb-5"> ≈ $<span>{(priceInput*maticPerUSD).toFixed(2)}</span></p>
      
      {/* Edit Name */}
      <div className="flex space-x-6 mb-5 text-xl font-medium">
        <p>Name </p>
        <input 
          type="text" 
          value={nameInput}
          onChange={e => setNameInput(e.target.value)}
        />
      </div>
      

      {/* Edit Description */}
      <div className="flex space-x-6 w-full text-xl font-medium">
        <p>Description </p>
        <textarea
          className="w-6/12 lg:w-3/4 h-40"
          type="text" 
          value={descriptionInput}
          onChange={e => setDescriptionInput(e.target.value)}
        />
      </div>

      {/*  */}

      <button className="place-self-center text-2xl p-2 border-slate-300 border-2 mt-4 
        rounded bg-green-500 text-white hover:scale-105 transition duration-150 transform ease-out" 
        onClick={submitEditItemInfo}
      >
        Submit
      </button>
    </div>
  )
};

// This gets called on every request
export async function getServerSideProps(context) {
  let nftContract = context.query.nftContract;
  const res = await fetch(`http://localhost:3000/api/nft/${nftContract}`)
  const nftData = await res.json()

  return { props: { nftData } }
}

export default EditItemInfo;
