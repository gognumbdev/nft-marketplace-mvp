import data from "../../../database/nfts"

export default function handler(req,res) {
    res.status(200).json(data);
}