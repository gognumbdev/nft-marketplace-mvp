import { Canvas} from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import NFTCard from "./NFTCard";
import { Suspense,useState } from "react";
import {SwitchHorizontalIcon} from "@heroicons/react/outline"
import dynamic from "next/dynamic";

const NFT3D = ({data,card}) => {
    const [rotate, setRotate] = useState(false);
    const Model3D = dynamic(() => import(`./3Dmodels/${data.jsx}`))

    // let camera = data.angle ? {fov: 75, near: 0.1, far: 1000, position: [3, 3, 3]} : {} ;

    return (
    <div className='cursor-pointer w-3/4 grid grid-cols-1 h-80 md:h-96'>
        <Canvas >
        <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2,5,2]} intensity={1} />
            <Suspense fallback={false}>
                <Model3D rotate={rotate} />
            </Suspense>
        </Canvas>
        <SwitchHorizontalIcon onClick={() => setRotate(!rotate)} className="h-6 place-self-center border-2 rounded-full bg-white "/>
        {card &&  <NFTCard {...data}/> }
    </div>
    )
}

export default NFT3D;
