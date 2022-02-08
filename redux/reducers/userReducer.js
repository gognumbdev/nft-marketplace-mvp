import {LOGIN,LOGOUT} from "../actionTypes"

// Initial user state
export const InitailUserState = {
    username: "",
    walletAddress: "",
    balance:"",
    network:{},
    profileImage: "",
    description: "",
    socialNetworks: [],
}

const userReducer = (state = InitailUserState,{type,payload}) => {
    switch(type) {
        case LOGIN : 
            return {
                username: payload.username,
                walletAddress: payload.walletAddress,
                balance:payload.balance,
                network:payload.network,
                profileImage: payload.profileImage ,
            }
        case LOGOUT : 
            return {...InitailUserState}
        default :
            return state
    }
}

export default userReducer;

// {
//     username: payload.username,
//     walletAddress: payload.walletAddress,
//     balance:payload.balance,
//     network:payload.network,
//     profileImage: payload.profileImage,
//     description: payload.description,
//     socialNetworks: payload.socialNetworks,
// }