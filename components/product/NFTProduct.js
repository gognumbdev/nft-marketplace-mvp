import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const NFTProduct = ({Model,nftName}) => {
    return (
        <div className="py-8 flex-col space-y-5">
            <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2,5,2]} intensity={1} />
                <Model />
            </Canvas>
            
            <p className="relative shadow-lg bg-white w-fit p-2 text-2xl max-w-4xl">
                {nftName}
                <span className="">name as;ldjas;lkd;laskd;laskd;lakd;laskd;lak;dlaska;lsdk;alskd;laskd;laskd;la;sldk;aslkss</span>
           </p>

        </div>
    )
}

export default NFTProduct
