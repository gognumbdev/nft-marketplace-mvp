import * as types from './type.js'

// LOGIN: Set User Data we get from wallets
export const logIn = (userData) => (dispatch) =>
  dispatch({
    type: types.LOGIN,
    payload: {
        username: userData.username,
        walletAddress: userData.walletAddress,
        balance:userData.balance ,
        network:userData.network ,
        profileImage: userData.profileImage ,
        description: userData.description ,
        socialNetworks: userData.socialNetworks ,
    },
})

// LOGOUT: clear User Data we get from wallets
export const logOut = () => (dispatch) =>
  dispatch({
    type: types.LOGOUT,
    payload: {},
})

