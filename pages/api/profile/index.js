import dbConnect from "../../../database/dbConnect";
const {UserModel} = require("../../../database/dbModel/User")
export default async function handler(req,res) {

    dbConnect();
    const usersData = await UserModel.find({});

    res.status(200).json(usersData)
}