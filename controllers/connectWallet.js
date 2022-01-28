import { ethers } from "ethers";
import { UserModel } from "../database/dbModel/User";
import { logIn } from "../redux/action";

const connectWallet = async () => {

    if (typeof window !== "undefined") {
        const {ethereum} =window;
        
        await ethereum.enable()

        //* Get user log in with Metamask wallet 
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer =  provider.getSigner();
        const userNetwork = await provider.getNetwork();
        const userAddress = await signer.getAddress();
        // const userAddress = await ethereum.request({ method: 'eth_accounts' });
        const userBalance = await signer.getBalance()
        
        console.log("request result:",userNetwork,userAddress,userBalance);
        
        return ({userNetwork,userAddress,userBalance})
        //* set local state
    }
}

const connectAndDispatch =(dispatch,router) => {
    
    connectWallet().then( async ({userAddress,userBalance,userNetwork}) => {
        
        // const userData = await UserModel.find({walletAddress:userAddress});

        // console.log(userData)

        dispatch(logIn(
            {
                walletAddress: userAddress,
                balance:userBalance,
                network:userNetwork,
            }
        ))
        router.push("/")
    })    
}

const checkConnectAndDispatch = (dispatch) => {
    connectWallet().then(({userAddress,userBalance,userNetwork}) => {
        dispatch(logIn(
            {
                username: "username",
                walletAddress: userAddress,
                balance:userBalance,
                network:userNetwork,
                profileImage: "", 
                description: "user desciption",
                socialNetworks: [
                    {
                        name: "twitter",
                        value: "user twitter",
                        link: "https://twitter.com"
                    },
                    {
                        name: "instagram",
                        value: "user instagram",
                        link: "https://www.instagram.com"
                    },
                ],
            }
        ))
    })
}


export {connectWallet,connectAndDispatch,checkConnectAndDispatch}