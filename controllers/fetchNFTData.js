
const fetchNFTData = async (contract) => {
    const res = await fetch(`http://localhost:3000/api/products/${contract}`)
    const nftData = await res.json()
    
    return nftData;
}

export default fetchNFTData;