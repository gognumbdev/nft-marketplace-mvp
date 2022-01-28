
import dbConnect from "../../../database/dbConnect";
const {UserModel} = require("../../../database/dbModel/User")
export default async function handler(req,res) {
    const {walletAddress} = req.query

    dbConnect();
    const usersData = await UserModel.find({walletAddress:walletAddress});    

    res.status(200).json(usersData[0])
}