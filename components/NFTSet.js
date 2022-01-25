import NFT3D from "./NFT3D"

const NFTSet = ({data}) => {
    return (
        <div className="flex space-x-10 w-screen justify-center items-center mb-10">
            {data.map(nftData => (
                <NFT3D model={nftData.jsx} data={nftData} angle={true} />
            ))}
        </div>
    )
}

export default NFTSet
