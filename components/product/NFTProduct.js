import { SwitchHorizontalIcon } from "@heroicons/react/outline";
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import dynamic from "next/dynamic";
import { useState } from "react";

const NFTProduct = ({jsx,nftName,nftContract,blockchain}) => {
    const [rotate, setRotate] = useState(false);
    let Model = dynamic(() => import(`../3Dmodels/${jsx}`));

    return (
        <div className="grid grid-cols-1 h-screen place-items-center">
            <div className="cursor-pointer h-5/6 w-full bg-gradient-to-r from-gray-200 to-slate-300">
                <Canvas>
                    <OrbitControls enableZoom={true} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2,5,2]} intensity={1} />
                    <Model rotate={rotate} />
                </Canvas>
            </div>

            <div className="flex space-x-5 mt-2 w-fit">
                <p className="relative font-bold shadow-lg bg-white w-fit p-2 text-2xl max-w-4xl rounded min-w-fit
                    transform transition duration-300 ease-out cursor-pointer hover:scale-105">
                    {nftName}
                    <span className="absolute left-0 top-[-20px] text-base">name</span>
                </p>
                <SwitchHorizontalIcon 
                    onClick={() => setRotate(!rotate)} 
                    className="h-6 place-self-center border-2 rounded-full bg-white cursor-pointer hover:bg-amber-500 
                    hover:scale-125 transform transition duration-300 ease-out "
                />
            </div>

            <div className="relative shadow-lg bg-white w-fit p-2 text-base max-w-4xl rounded min-w-fit mt-[-30px]
                transform transition duration-300 ease-out cursor-pointer hover:scale-105">
                <p className="font-medium">
                    {nftContract}
                </p>
                <p className="absolute left-0 top-[-20px] font-medium">NFT contract on {blockchain} blockchain</p>
            </div>
            

        </div>
    )
}

export default NFTProduct
