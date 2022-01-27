import NFTCard from "../components/NFTCard"
import { Suspense, useState } from "react"
import Head from "next/head"
import Box from "../components/3Dmodels/Box"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import NFT3D from "../components/NFT3D"

const data = {
    image:"https://lh3.googleusercontent.com/T_QvX8TVs6KczTHtXX8OMLVpiyDCvVKLmAczU4bdDZ0OSNVk-G7kGov9VV0MB3WIMFCA_nLXM5G7BjzxJ2IBxgTz5z__DfKKO3Pn=w600",
    username:"poom_jirayu",
    profileImage:"https://lh3.googleusercontent.com/OrUmaANKu0q3Eq7JjPj2GHU3kLQ6hIswAF2giK4R4wAodzva95XTp_vFJ2NjsUPd18AS8WJlARtRV0CY8mDa_QQjN4XAz8mnNJnA=s0",
    nftName:"BER_JUNK_warrior_no5",
    blockchain:"polygon",
    blockchainImage:"https://pbs.twimg.com/profile_images/1401931168056967175/q4itcBEb_400x400.jpg",
    price:"28.09",
    unit:"Matic",
  }

const CreatePage = () => {
    var [contractData, setContractData] = useState([])
    return (
        <div className="p-6 space-y-12">
            <Head>
                <title>Create NFT</title>
            </Head>

            <div className="flex flex-row">
                <div className="basis-1/3">
                    <PreviewSection/>
                </div>
                <div className="basis-2/3 space-y-12">
                    <ProductDetailSection/>
                    <ContractSection contractData={contractData} setContractData={setContractData}/>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-400 rounded w-36 h-12 text-white">
                    Submit
                </button>
            </div>
            
        </div>
    )
}

const PreviewSection = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-bold">Preview</h2>
            <div className="flex flex-col space-y-10 grid justify-items-center">
                <NFTCard {...data}/>
                <div className="grid justify-items-center">
                    <p>Select your work</p>
                    <button className="bg-orange-400 rounded p-2" type="image">Upload</button>
                </div>
            </div>
        </div>
    )
}

const ProductDetailSection = () => {
    return (
        <div className="space-y-3">
            <h1 className="text-xl font-bold">Product Details</h1>
            <p>Product Name</p>
            <input 
                className="rounded shadow w-full p-2"
                type="text"
                placeholder="Give your product a cool name!"></input>
            <p>Product Story</p>
            <textarea 
                className="rounded shadow w-full h-52 p-2 resize-none" 
                placeholder="Tell others about your product amazing story!"></textarea>
        </div>
    )
}

const ContractSection = (props) => {
    var [openContractMenu, setOpenContractMenu] = useState(false)
    return (
        <div className="space-y-3">
            <h2 className="text-lg font-bold">Special Contract Offer</h2>
            <input type="checkbox" onClick={() => setOpenContractMenu(!openContractMenu)}/>
            <div>{openContractMenu ? <ContractEditor {...props}/> : null}</div>
        </div>
    )
}

const ContractEditor = (props) => {
    const generate_contract_bars = (contract_info, idx) => {
        contract_info.contract_order = idx
        return <ContractBar {...props} key={idx} {...contract_info}/>
    }

    const create_contract = (e) => {
        var default_contract = {
            deliveryTime: 1,
            price : 0
        }
        props.setContractData([...props.contractData, default_contract])
    }

    return (
        <div className="space-y-3">
            <div className="shadow rounded p-3 h-80 overflow-y-scroll space-y-4">
                {props.contractData.length == 0 ? <p>Empty</p>: props.contractData.map(generate_contract_bars)}  
            </div>
            <button className="bg-orange-400 rounded p-2" onClick={create_contract}>
                Add Contract
            </button>
        </div>
    )
}

const ContractBar = (props) => {
    const remove_contract = (e) => {
        var temp = [...(props.contractData)]
        temp.splice(props.contract_order, 1)
        props.setContractData(temp)
    }

    const get_delivery_time_props = (props) => {
        return {
            type: "number",
            value: props.contractData[props.contract_order].deliveryTime,
            onChange: update_delivery_time
        }
    }

    const get_price_props = (props) => {
        return {
            type: "number",
            step: "any",
            value: props.contractData[props.contract_order].price,
            onChange: update_price
        }
    }

    const update_delivery_time = (e) => {
        var temp = [...(props.contractData)]
        temp[props.contract_order].deliveryTime = e.target.value
        props.setContractData(temp)
    }

    const update_price = (e) => {
        var temp = [...(props.contractData)]
        temp[props.contract_order].price = e.target.value
        props.setContractData(temp)
    }

    return (
        <div className="rounded shadow p-6">
            <div className="flex flex-row justify-between">
                <p>NTF #{props.contract_order + 1}</p>
                <button 
                    className="bg-red-600 rounded shadow py-1 px-3 text-white float-right"
                    onClick={remove_contract}>
                    remove
                </button>
            </div>
            <ContractSetter title="Delivery Time" inputProps={get_delivery_time_props(props)} unit="Day"/>
            <ContractSetter title="Price" inputProps={get_price_props(props)} unit="Matic"/>
        </div>
    )
}

const ContractSetter = (props) => {
    return (
        <div className="flex flex-row">
            <div className="basis-4/12">
                <p>{props.title}</p>
            </div>
            <div className="basis-4/12">
                <input className="p-1" {...(props.inputProps)}/>
            </div>
            <div className="basis-4/12">
                <p>{props.unit}</p>
            </div>
            
        </div>
    )
}

export default CreatePage
