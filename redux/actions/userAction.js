import {LOGIN,LOGOUT} from '../actionTypes.js'
import { InitailUserState } from '../reducers/userReducer.js';

// LOGIN: Set User Data we get from wallets
export const logIn = (userData) => async (dispatch) =>{
    try {
        dispatch({
            type: LOGIN,
            payload: {
                username: userData.username,
                walletAddress: userData.walletAddress,
                balance:userData.balance ,
                network:userData.network ,
                profileImage: userData.profileImage ,
            }
        })    
    } catch (error) {
        console.log(error);
    }    
}


// LOGOUT: clear User Data we get from wallets
export const logOut = () => (dispatch) =>
  dispatch({
    type:LOGOUT,
    payload: {
        ...InitailUserState
    },
})

