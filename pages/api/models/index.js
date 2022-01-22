import {Box,AnimatedSphere,Iphone,Macbook,NewyorkManhattan,Ethereum,LedgerNanoS,SquidGame,NFTLogo} from "../../../database/models"

export default function handler(req,res) {
    const models = [Box,AnimatedSphere,Iphone,Macbook,NewyorkManhattan,Ethereum,LedgerNanoS,SquidGame,NFTLogo]
    res.status(200).send(models);
}