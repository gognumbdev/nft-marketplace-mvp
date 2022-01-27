const mongoose = require("mongoose")
const dbConnect = require("./dbConnect")
const NFT = require("./dbModel/NFT")

// Connect to our MongoDB Database
dbConnect().catch(error => console.log(error));

const nfts = [
    {
    "_id": "61ed13c4cf6b391ce162fef8",
    "productId": 0,
    "model": "iphone.gltf",
    "jsx":"Iphone.js",
    "owner": "jinnapat",
    "creator": "jinnapat",
    "ownerImage": "https://lh3.googleusercontent.com/a-/AOh14GjhoOWeq65UaN_jCrmRS2nkzxnl7lCFIu98tZVIJg=s100",
    "creatorImage": "https://lh3.googleusercontent.com/a-/AOh14GjhoOWeq65UaN_jCrmRS2nkzxnl7lCFIu98tZVIJg=s100",
    "nftName": "Iphone",
    "blockchain": "polygon",
    "blockchainImage": "https://finematics.com/wp-content/uploads/2021/04/polygon-logo-270x250.png",
    "price": 108.08,
    "unit": "Matic",
    "angle": false,
    "__v": 0
    },
    {
    "_id": "61ed164d249e7ed07738f4c2",
    "productId": 1,
    "model": "macbook.gltf",
    "jsx":"Macbook.js",
    "owner": "jinnapat",
    "creator": "jinnapat",
    "ownerImage": "https://lh3.googleusercontent.com/a-/AOh14GjhoOWeq65UaN_jCrmRS2nkzxnl7lCFIu98tZVIJg=s100",
    "creatorImage": "https://lh3.googleusercontent.com/a-/AOh14GjhoOWeq65UaN_jCrmRS2nkzxnl7lCFIu98tZVIJg=s100",
    "nftName": "Macbook",
    "blockchain": "polygon",
    "blockchainImage": "https://finematics.com/wp-content/uploads/2021/04/polygon-logo-270x250.png",
    "price": 214,
    "unit": "Matic",
    "angle": false,
    "__v": 0
    },
    {
    "_id": "61ed164d249e7ed07738f4c3",
    "productId": 2,
    "model": "newyork_manhattan.gltf",
    "jsx":"NewyorkManhattan.js",
    "owner": "gognumbdev",
    "creator": "gognumbdev",
    "ownerImage": "https://lh3.googleusercontent.com/ogw/ADea4I40OTFSVDYMHohSaobJahOpB0r8krQoeaKE-SIq=s32-c-mo",
    "creatorImage": "https://lh3.googleusercontent.com/ogw/ADea4I40OTFSVDYMHohSaobJahOpB0r8krQoeaKE-SIq=s32-c-mo",
    "nftName": "New York Manhattan",
    "blockchain": "polygon",
    "blockchainImage": "https://finematics.com/wp-content/uploads/2021/04/polygon-logo-270x250.png",
    "price": 700,
    "unit": "Matic",
    "angle": true,
    "__v": 0
    },
    {
    "_id": "61ed164d249e7ed07738f4c4",
    "productId": 3,
    "model": "ethereum.gltf",
    "jsx":"Ethereum.js",
    "owner": "jinnapat",
    "creator": "jinnapat",
    "ownerImage": "https://lh3.googleusercontent.com/a-/AOh14GjhoOWeq65UaN_jCrmRS2nkzxnl7lCFIu98tZVIJg=s100",
    "creatorImage": "https://lh3.googleusercontent.com/a-/AOh14GjhoOWeq65UaN_jCrmRS2nkzxnl7lCFIu98tZVIJg=s100",
    "nftName": "Ethereum",
    "blockchain": "polygon",
    "blockchainImage": "https://finematics.com/wp-content/uploads/2021/04/polygon-logo-270x250.png",
    "price": 500,
    "unit": "Matic",
    "angle": false,
    "__v": 0
    },
    {
    "_id": "61ed164d249e7ed07738f4c5",
    "productId": 4,
    "model": "ledger_nano_s.gltf",
    "jsx":"LedgerNanoS",
    "owner": "gognumbdev",
    "creator": "gognumbdev",
    "ownerImage": "https://lh3.googleusercontent.com/ogw/ADea4I40OTFSVDYMHohSaobJahOpB0r8krQoeaKE-SIq=s32-c-mo",
    "creatorImage": "https://lh3.googleusercontent.com/ogw/ADea4I40OTFSVDYMHohSaobJahOpB0r8krQoeaKE-SIq=s32-c-mo",
    "nftName": "Ledger Nano S",
    "blockchain": "polygon",
    "blockchainImage": "https://finematics.com/wp-content/uploads/2021/04/polygon-logo-270x250.png",
    "price": 350.31,
    "unit": "Matic",
    "angle": true,
    "__v": 0
    },
    {
    "_id": "61ed164d249e7ed07738f4c6",
    "productId": 5,
    "model": "squid_game.gltf",
    "jsx":"SquidGame.js",
    "owner": "jinnapat",
    "creator": "jinnapat",
    "ownerImage": "https://lh3.googleusercontent.com/a-/AOh14GjhoOWeq65UaN_jCrmRS2nkzxnl7lCFIu98tZVIJg=s100",
    "creatorImage": "https://lh3.googleusercontent.com/a-/AOh14GjhoOWeq65UaN_jCrmRS2nkzxnl7lCFIu98tZVIJg=s100",
    "nftName": "Squid Game",
    "blockchain": "polygon",
    "blockchainImage": "https://finematics.com/wp-content/uploads/2021/04/polygon-logo-270x250.png",
    "price": 33.33,
    "unit": "Matic",
    "angle": false,
    "__v": 0
    },
    {
    "_id": "61ed164d249e7ed07738f4c7",
    "productId": 6,
    "model": "nftLogo.gltf",
    "jsx":"NFTLogo.js",
    "owner": "gognumbdev",
    "creator": "gognumbdev",
    "ownerImage": "https://lh3.googleusercontent.com/ogw/ADea4I40OTFSVDYMHohSaobJahOpB0r8krQoeaKE-SIq=s32-c-mo",
    "creatorImage": "https://lh3.googleusercontent.com/ogw/ADea4I40OTFSVDYMHohSaobJahOpB0r8krQoeaKE-SIq=s32-c-mo",
    "nftName": "NFT Logo",
    "blockchain": "polygon",
    "blockchainImage": "https://finematics.com/wp-content/uploads/2021/04/polygon-logo-270x250.png",
    "price": 20.22,
    "unit": "Matic",
    "angle": false,
    "__v": 0
    },
    {
    "_id": "61ed164d249e7ed07738f4c8",
    "productId": 7,
    "model": "spacex.gltf",
    "jsx":"Spacex.js",
    "owner": "jinnapat",
    "creator": "jinnapat",
    "ownerImage": "https://lh3.googleusercontent.com/a-/AOh14GjhoOWeq65UaN_jCrmRS2nkzxnl7lCFIu98tZVIJg=s100",
    "creatorImage": "https://lh3.googleusercontent.com/a-/AOh14GjhoOWeq65UaN_jCrmRS2nkzxnl7lCFIu98tZVIJg=s100",
    "nftName": "Space X Falcon",
    "blockchain": "polygon",
    "blockchainImage": "https://finematics.com/wp-content/uploads/2021/04/polygon-logo-270x250.png",
    "price": 20.22,
    "unit": "Matic",
    "angle": false,
    "__v": 0
    }
]

const createNFT = async () => {
    const newNFT = new NFT({
        productId:0,
        model:"iphone.gltf",
        jsx:"Iphone",
        owner:"jinnapat",
        ownerWalletId:"",
        CreatorWalletId:"",
        creator:"jinnapat",
        ownerImage:"https://lh3.googleusercontent.com/a-/AOh14GjhoOWeq65UaN_jCrmRS2nkzxnl7lCFIu98tZVIJg=s100",
        creatorImage:"https://lh3.googleusercontent.com/a-/AOh14GjhoOWeq65UaN_jCrmRS2nkzxnl7lCFIu98tZVIJg=s100",
        nftName:"Iphone",
        blockchain:"polygon",
        blockchainImage:"https://finematics.com/wp-content/uploads/2021/04/polygon-logo-270x250.png",
        price:"108.08",
        unit:"Matic",
        angle:false
    })
       
    try{
        await newNFT.save();
        console.log("Create NFT Success !");
    }catch (error) {
        console.log(error);
    }
}

// createNFT();

const insertManyNFT = async () => {
    NFT.insertMany(nfts, function(error, docs) {console.log(error);});
}

insertManyNFT();




