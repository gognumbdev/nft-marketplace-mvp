const mongoose = require("mongoose")
const dbConnect = require("./dbConnect")
const User = require("./dbModel/User")

// Connect to our MongoDB Database
dbConnect().catch(error => console.log(error));

const createUser = async () => {

    const newUser = new User(
        {
            username: "Poom_Jirayu",
            walletId: "45654dvswe4r65xase5654",
            profileImage: "/profile_img/poom.png",
            description: "Hello I'm Graphic Designer / Character Designer ,and this is My Original Character , Thank you !Joined July 2021",
            socialNetworks: [{
                name: "twitter",
                value: "jirayupoom",
                link: "https://twitter.com/jirayupoom"
            },
            {
                name: "instagram",
                value: "poom_jirayu_",
                link: "https://www.instagram.com/poom_jirayu_/"
            }
            ]
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




