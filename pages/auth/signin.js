import Head from "next/head"
import { useState } from "react";
import { EyeIcon,EyeOffIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const signIn = () => {
      console.log(email,password);
      // Check user on database , if they exist with this emal and password then -> sign them in step two
      if(email && password){
        router.push({
          pathname:"/auth/signin-step-two",
          query:{
            email:email,
          }
        })
      }
      
  }

  const signUp = () => {
    router.push({
      pathname:"/auth/signup",
    })
  }

  return (
    <div className='grid grid-cols-1 place-items-center py-16'>
      <Head>
        <title>Sign In</title>
      </Head>
        <p className='text-4xl '> 
          Sign In to 
          <span className="ml-2 font-bold text-blue-500 ">Free</span>
          <span className="font-bold text-amber-500">Flow</span>
        </p>
        
        <div className="border-2 grid grid-cols-1 place-items-center mt-10 px-4 py-10 rounded-lg">
          <input type="text" placeholder="Email" 
            className="text-xl border-2 p-2 mb-4 rounded outline-none focus:border-amber-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <div className="relative flex items-center">
            <input type={showPassword ? "text": "password"} placeholder="Password" 
              className="text-xl border-2 p-2 mb-4 rounded outline-none w-full focus:border-amber-500"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {showPassword ? (
                <EyeOffIcon className="h-6 absolute right-2 top-3 cursor-pointer" onClick={ () => setShowPassword(false)} />
              ) : (
                <EyeIcon  className="h-6 absolute right-2 top-3 cursor-pointer" onClick={ () => setShowPassword(true)}/>
            )}
          </div>
          

          <button className="mt-10 border-2 p-2 rounded bg-amber-400 text-white font-bold text-xl w-full"
            onClick={signIn} >
            Sign In
          </button>
          
        </div>

        <div className="grid grid-cols-1 place-items-center w-full mt-5">
            <p className="text-gray-500 mr-2 mb-2 cursor-pointer text-xl hover:text-amber-500 font-bold transition duration-100"
              onClick={signUp}>
              Don't have account ? 
            </p>
        </div>
    </div>
  );
};

export default signin;
