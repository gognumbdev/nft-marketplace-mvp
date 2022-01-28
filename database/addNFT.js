const mongoose = require("mongoose")
const dbConnect = require("./dbConnect")
const {NFTModel} = require("./dbModel/NFT")

// Connect to our MongoDB Database
dbConnect().catch(error => console.log(error));

const nfts = [
    {
        nftContract:"0x47474CaA8383e015C0b3f22b2AE2fD8b794E4C8e",
        productId:"0",
        model:"iphone.gltf",
        jsx:"Iphone",
        owner:"gognumbdev",
        ownerWalletAddress:"0x5593572e312C4F8Fc2fe924907624B39D1d6B65c",
        creator:"Free Flow Marketplace",
        creatorWalletAddress:"0x518707e145604eA17eA6fd319Fa65DCD2E96Eb34",
        nftName:"Iphone",
        blockchain:"polygon",
        blockchainImage:"https://finematics.com/wp-content/uploads/2021/04/polygon-logo-270x250.png",
        price:108.08,
        unit:"Matic",
        transaction:[
            {
                nftContract:"0x47474CaA8383e015C0b3f22b2AE2fD8b794E4C8e",
                fromAddress:"0x518707e145604eA17eA6fd319Fa65DCD2E96Eb34",
                toAddress:"0x5593572e312C4F8Fc2fe924907624B39D1d6B65c",
                value:108.08,
                network:{
                    chainId: 1,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "homestead"
                },
                unit:"Matic",
                date:new Date().toString(),
            }
        ],
    }
]

const createNFT = async () => {
    const newNFT = new NFTModel({
        nftContract:"0x47474CaA8383e015C0b3f22b2AE2fD8b794E4C8e",
        productId:"0",
        model:"iphone.gltf",
        jsx:"Iphone",
        owner:"gognumbdev",
        ownerWalletAddress:"0x5593572e312C4F8Fc2fe924907624B39D1d6B65c",
        creator:"Free Flow Marketplace",
        creatorWalletAddress:"0x518707e145604eA17eA6fd319Fa65DCD2E96Eb34",
        nftName:"Iphone",
        blockchain:"polygon",
        blockchainImage:"https://finematics.com/wp-content/uploads/2021/04/polygon-logo-270x250.png",
        price:108.08,
        unit:"Matic",
        transaction:[
            {
                nftName:"Iphone",
                nftContract:"0x47474CaA8383e015C0b3f22b2AE2fD8b794E4C8e",
                fromAddress:"0x518707e145604eA17eA6fd319Fa65DCD2E96Eb34",
                toAddress:"0x5593572e312C4F8Fc2fe924907624B39D1d6B65c",
                value:108.08,
                network:{
                    chainId: 1,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "homestead"
                },
                unit:"Matic",
                date:new Date().toString(),
            }
        ]
    })
       
    try{
        await newNFT.save();
        console.log("Create NFT Success !");
    }catch (error) {
        console.log(error);
    }
}

createNFT();

// const insertManyNFT = async () => {
//     NFT.insertMany(nfts, function(error, docs) {console.log(error);});
// }

// insertManyNFT();




