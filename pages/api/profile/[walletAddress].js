import dbConnect from "../../../database/dbConnect";
const {UserModel} = require("../../../database/dbModel/User")
export default async function handler(req,res) {
    const {walletAddress} = req.query
    
    dbConnect();
    const userData = await UserModel.findOne({walletAddress:walletAddress})

    console.log(req.method);
    if (req.method === "GET") {

        try {
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
                    let newUserData = await UserModel.findOne({walletAddress:walletAddress});
                    res.status(201).json(newUserData)
                })
            }
            // return avaiable user in MongoDB
            res.status(200).json(userData)    
        } catch (error) {
            console.log(error);
        }

    }else if (req.method === "POST") {

        const {usernameInput,bioInput,twitterInput,instagramInput,linkInput,image} = JSON.parse(req.body)
        let twitter = userData.socialNetworks.find(obj => obj.name === "twitter")
        let instagram = userData.socialNetworks.find(obj => obj.name === "instagram")
        let link = userData.socialNetworks.find(obj => obj.name === "link")
        // Update user data on MongoDB
        try {
            let data = await UserModel.findOneAndUpdate({walletAddress:walletAddress},
                {
                    username: usernameInput || userData.username ,
                    description: bioInput || userData.description,
                    profileImage: image || userData.profileImage,
                    socialNetworks: [
                        {
                            name:"twitter",
                            value: twitterInput.ref || twitter.value,
                            link: twitterInput.link || twitter.link
                        },
                        {
                            name:"instagram",
                            value: instagramInput.ref || instagram.value,
                            link: instagramInput.link || instagram.link
                        },
                        {
                            name:"link",
                            value: linkInput.ref || link.value,
                            link: linkInput.link || link.link
                        }
                    ],
                },
                {
                    new:true
                }
            )

            res.status(201).json(data)
        } catch (error) {
            console.log(error);
        } 
    }
        
}