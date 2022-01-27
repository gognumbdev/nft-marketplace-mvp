import { combineReducers } from 'redux'
import * as types from './type.js'

// Initial user state
const InitailUserState = {
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
        case types.LOGIN : 
            return {
                username: payload.username,
                walletAddress: payload.walletAddress,
                balance:payload.balance,
                network:payload.network,
                profileImage: payload.profileImage,
                description: payload.description,
                socialNetworks: payload.socialNetworks,
            }
        case types.LOGOUT : 
            return {...InitailUserState}
        default :
            return state
    }
}

// COMBINED REDUCERS
const reducers = {
    user: userReducer,
}

export default combineReducers(reducers)