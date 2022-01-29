import dbConnect from "../../../database/dbConnect";
const {UserModel} = require("../../../database/dbModel/User")
export default async function handler(req,res) {
    const {walletAddress} = req.query
    dbConnect();
    const userData = await UserModel.findOne({walletAddress:walletAddress})
    if (!userData && walletAddress) {
        console.log("Find Nothing !");
        await UserModel.create({
            username: "unnamed",
            walletAddress: walletAddress,
            profileImage: "https://img.favpng.com/20/11/12/computer-icons-user-profile-png-favpng-0UAKKCpRRsMj5NaiELzw1pV7L.jpg",
            description: "",
            socialNetworks: [],
            transactions:[],
            listedNFT:[],
            ownedNFT:[]
        }).then(async () => {
            console.log("created new user")
            let userData = await UserModel.findOne({walletAddress:walletAddress});
            res.status(200).json(userData)
        })
    }

    // return avaiable user in MongoDB
    res.status(200).json(userData)    
}