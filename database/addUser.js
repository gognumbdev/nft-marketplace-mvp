const mongoose = require("mongoose")
const dbConnect = require("./dbConnect")
const {UserModel} = require("./dbModel/User")

// Connect to our MongoDB Database
dbConnect().catch(error => console.log(error));

const createUser = async () => {

    const newUser = new UserModel(
        {
            username: "Free Flow Marketplace",
            walletAddress: "0x518707e145604eA17eA6fd319Fa65DCD2E96Eb34",
            profileImage: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
            description: "Free Flow Marketplace allow you to sell your interactive 3D NFT to anyone across the world.",
            socialNetworks: [
                            {
                                name: "twitter",
                                value: "@freeflowinc",
                                link: "https://twitter.com/freeflowinc"
                            },
                            {
                                name: "instagram",
                                value: "free flow inc",
                                link: "https://www.instagram.com/freeflowinc"
                            }
            ],
            transactions:[
                {
                    nftName:"Iphone",
                    nftContract:"0x47474CaA8383e015C0b3f22b2AE2fD8b794E4C8e",
                    fromAddress:"0x518707e145604eA17eA6fd319Fa65DCD2E96Eb34",
                    toAddress:"0x5593572e312C4F8Fc2fe924907624B39D1d6B65c",
                    value:0.0175,
                    network:{
                        chainId: 1,
                        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        name: "homestead"
                    },
                    unit:"ETH",
                    date:new Date().toString(),
                }
            ],
            listedNFT:[
            
            ],
            ownedNFT:[]
        }
    )
       
    try{
        await newUser.save();
        console.log("Create User Success !");
    }catch (error) {
        console.log(error);
    }
}

createUser();




