module.exports = {
  reactStrictMode: true,
  env:{
    mongoDB_uri:"mongodb+srv://nftmarketplacemvp:nftmarketplacemvp2022@cluster0.hlzar.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    marketplacePrivateKey:"01290c7d6abff326948e1514d5a20eeede5b433d36d176e66b2a8d852d83a9cb",
    marketplaceWalletAddress:"0x518707e145604eA17eA6fd319Fa65DCD2E96Eb34",
    // This is hardhat localhost network
    nftMarketAddress:"0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
    nftAddress:"0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
    
  },
  image:{
    domains: ['/public/image'],
  }
  
  
}
