import NFTCard from "../components/NFTCard"
import Head from "next/head"
import { useState } from "react";
import FileBase64 from "react-file-base64"
import { useSelector } from "react-redux";
import { CloudUploadIcon,CheckCircleIcon } from "@heroicons/react/outline";
import polygon from "../public/icons/crypto/polygon.png"
import Image from "next/image"
import { useRouter } from "next/router";
//module related to Smart contract 
const config = require("../next.config")
import NFT from "../artifacts/contracts/NFT.sol/NFT.json"
import Market from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json"
import { verifyMessage } from "../controllers/connectWallet";

const CreatePage = () => {
  const {walletAddress} = useSelector(state => state.user)
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [blockchain, setBlockchain] = useState("polygon");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);

  const submitCreateNFT = async () => {
    console.log(name,description,blockchain,price);
    let createData = {name,description,blockchain,price};
    let res = await fetch(`http://localhost:3000/api/create/${walletAddress}`,{
      method:"POST",
      body:JSON.stringify(createData)
    })
    let data = await res.json();
    console.log(`Respond fata from create NFT for address ${walletAddress} `,data);
  
    router.push({
      pathname:"/profile/[walletAddress]",
      query:{
        walletAddress:walletAddress
      }
    })
  }

  const createNFT = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const {ethereum} = window;
      
        await ethereum.enable()
        let requestMessage = "Please click sign button to give your signature to us to verify that this is your true request for create NFT."
        const provider = new ethers.providers.Web3Provider(ethereum)    
        const signer = provider.getSigner()
        const signature = await signer.signMessage(requestMessage);
        
        let permission = await verifyMessage(
          {
              message:requestMessage,
              address:walletAddress,
              signature
          }
        )

        if (!permission) {
          console.log("You are aren't give the true signature for owner of this wallet address.");
          return ;
        }

        // Create NFT from smart contract
        let contract = new ethers.Contract(config.env.nftAddress, NFT.abi, signer)
        let transaction = await contract.createToken()
        let tx = await transaction.wait()
        let event = tx.events[0]
        let value = event.args[2]
        let tokenId = value.toNumber()
        const sellPrice = ethers.utils.parseUnits(price, 'ether')
        console.log(tx,event,value,tokenId);


        /* then list the item for sale on the marketplace */
        let marketContract = new ethers.Contract(config.env.nftMarketAddress, Market.abi, signer)
        let createMarketItem = await marketContract.createMarketItem(config.env.nftAddress, tokenId, sellPrice)
        await createMarketItem.wait()
      } catch (error) {
        console.log(error);
      }
    }

  }

  return (
    <div className="lg:flex w-full grid-cols-1">
      <Head>
        <title>Create NFT</title>
      </Head>

      {/* Upload File Section (Left) */}
      <div className="relative flex-col space-y-10 w-5/12 px-4 lg:px-6 py-6">
        <p className="text-4xl font-bold">Preview</p>
        <div className="bg-white h-96 w-5/6">

        </div>
        {/* Preview NFT section */}

      </div>


      {/* NFT Details Section (Right) */}
      <div className="grid grid-cols-1 place-items-start grow px-4 lg:px-6 py-6">
        <p className="text-4xl font-bold">NFT Details</p>
        
        {/* Upload digital product */}
          <div className="flex-col space-y-2 ">
            <div className="flex space-x-2 items-center mt-5">
              <CloudUploadIcon className="h-8 rounded-full " />
              <p className="text-xl font-medium">Upload your digital product</p>
            </div>
          
          <FileBase64
            multiple={false}
            onDone={({base64}) => setFile(base64)}
          />
        </div>
        
        {/* Product Name */}
        <div className="flex-col space-y-2 px-2 mt-5">
          <p className="text-xl font-medium">Product Name</p>   
          <input 
            className="rounded outline-none text-lg px-2 py-1 font-medium shadow-xl"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        {/* Product Description */}
        <div className="flex-col space-y-2 px-2 mt-5">
          <p className="text-xl font-medium">Product Description</p>   
          <textarea 
            className="rounded outline-none md:w-96 lg:w-[520px] px-2 py-1 h-36 shadow-xl"
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        {/* Blockchain */}
        <div className="flex-col mt-5 space-y-2 px-2">
          <p className="text-xl font-bold">Blockchain network</p>
          {blockchain === "polygon" && (
              <div className="flex p-4 shadow-xl bg-white rounded hover:-translate-y-1 transition duration-200 cursor-pointer
                items-center space-x-4 text-blue-500 border-blue-500 border-2 transform ease-out">
                <Image 
                  src={polygon} 
                  alt="polygon" 
                  height={40}  
                  width={40}
                  objectFit="cover"
                />
                <div className="flex-col">
                  <p className="text-lg font-medium">Polygon
                    <span className="ml-2 text-gray-400">{"(auto select)"}</span>
                  </p>
                  <p className="text-sm">Polygon is Ethereum side chain with almost 0 gas fees ,secure and fast.</p>
                </div>

                <CheckCircleIcon className="bg-green-500 text-white rounded-full h-10" />
              </div>
          )}
        </div>

        {/* Price */}
        <div className="flex-col mt-5 space-y-2 px-2">
          <p className="text-xl font-bold">Price</p>
          <input 
            type="number" min="0" id="price" 
            name="price" 
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>

        {/* Submit */}
        <button 
          className="mt-10 border-gray-500 bg-green-500 p-4 text-xl text-white font-bold hover:scale-105 transition duration-200 
          transform ease-out rounded" 
            onClick={submitCreateNFT}
        >
            Submit
        </button>


      </div>

      
    </div>
  );
};

export default CreatePage;


