import Head from "next/head";
import { useState } from "react";
import { EyeIcon,EyeOffIcon,ExclamationCircleIcon,CheckCircleIcon } from "@heroicons/react/outline";
import ReactFlagSelect from "react-flags-select";
import {useRouter}  from "next/router"

const signup = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [countryCode,setCountryCode] = useState("");
  const [require, setRequire] = useState(false)

  const createAccount = () => {
    console.log("first name : ",firstName);
    console.log("last name : ",lastName)
    console.log("email : ",email)
    console.log("passowrd : ",password)
    console.log("country code : ",countryCode)
    if(firstName && lastName && email && password && countryCode) {
      console.log("Go to the next page")
    }else{
      setRequire(true);
    }
  }

  const checkEmail = (userEmail) => {
    if(!userEmail.includes("@"))
      return false;
    
    return true;
  }

  return (
    <div className='grid grid-cols-1 place-items-center'>
      <Head>
        <title>Sign Up</title>
      </Head>
      
      <p className="text-3xl py-6 font-medium">Create your account</p>
      
      <div className="border-2 bg--white grid grid-cols-1 mt-4 rounded-lg mb-6" >
        {/* First and Last Name */}
        <div className="flex space-x-4 p-4">
          <div className="space-y-2">
            <p className="text-lg font-bold">First name *</p>
            <input type="text" placeholder="First name" 
              className="text-xl border-2 outline-none focus:border-amber-500 px-4 py-2 rounded-lg" 
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            {!firstName ? (
              <div className="flex space-x-2">
                <ExclamationCircleIcon className="text-red-500 h-6"/>
                <p className="text-red-500">First name is required</p>
              </div>
            ) : ( (firstName.length >= 2) &&
              <div className="flex space-x-2">
                <CheckCircleIcon className="text-green-500 h-6"/>
                <p className="text-green-500">First name accpeted</p>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <p className="text-lg font-bold">Last name *</p>
            <input type="text" placeholder="Last name" 
              className="text-xl border-2 outline-none focus:border-amber-500 px-4 py-2 rounded-lg"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            {!lastName ? (
              <div className="flex space-x-2">
                <ExclamationCircleIcon className="text-red-500 h-6"/>
                <p className="text-red-500">Last name is required</p>
              </div>
            ) : ( (lastName.length >= 2) &&
              <div className="flex space-x-2">
                <CheckCircleIcon className="text-green-500 h-6"/>
                <p className="text-green-500">First name accpeted</p>
              </div>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2 px-4 py-2 w-full">
            <p className="text-lg font-bold">Email *</p>
            <input type="text" placeholder="Email" 
              className="text-xl border-2 outline-none focus:border-amber-500 px-4 py-2 rounded-lg"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {!email ? (
              <div className="flex space-x-2">
                <ExclamationCircleIcon className="text-red-500 h-6"/>
                <p className="text-red-500">Email is required</p>
              </div>
            ) : ( (checkEmail(email)) &&
              <div className="flex space-x-2">
                <CheckCircleIcon className="text-green-500 h-6"/>
                <p className="text-green-500">Email accpeted</p>
              </div>
            )}
        </div>

        {/* Password */}
        <div className="space-y-2 px-4 py-2">
            <p className="text-lg font-bold">Password *</p>
            <div className="flex items-center space-x-4">
              <input type={showPassword ? "text": "password"} placeholder="Password" 
                className="text-xl border-2 outline-none focus:border-amber-500 px-4 py-2 rounded-lg"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              
              {showPassword ? (
                  <EyeOffIcon className="h-8 right-2 top-3 cursor-pointer" onClick={ () => setShowPassword(false)} />
                ) : (
                  <EyeIcon  className="h-8 right-2 top-3 cursor-pointer" onClick={ () => setShowPassword(true)}/>
              )}
            </div>

            {!password ? (
              <div className="flex space-x-2">
                <ExclamationCircleIcon className="text-red-500 h-6"/>
                <p className="text-red-500">Password is required</p>
              </div>
            ) : ( (checkPassword(password)) &&
              <div className="flex space-x-2">
                <CheckCircleIcon className="text-green-500 h-6"/>
                <p className="text-green-500">Email accpeted</p>
              </div>
            )}
        
        </div>

        {/* Country */}
        <div className="space-y-2 p-4">
            <p className="text-xl font-bold">Where do you live ?</p>
            <p>For your convenience,please enter your current location of residence.</p>
            <ReactFlagSelect
              selected={countryCode}
              onSelect={code => setCountryCode(code)}
            />
            {!countryCode ? (
              <div className="flex space-x-2">
                <ExclamationCircleIcon className="text-red-500 h-6"/>
                <p className="text-red-500">Country is required</p>
              </div>
            ) : (
              <div className="flex space-x-2">
                <CheckCircleIcon className="text-green-500 h-6"/>
                <p className="text-green-500">Country accpeted</p>
              </div>
            )}
        </div>

        <button
          disabled={!(firstName && lastName && email && password && countryCode)}
          className={`border-2 p-4 text-2xl w-3/6 place-self-center rounded-lg my-4 bg-amber-400 font-medium 
            ${!(firstName && lastName && email && password && countryCode) && "opacity-50"} `}
          onClick={createAccount}>
          Create account
        </button>

      </div>

      <p className="text-2xl">
        <span>Already have a FreeFlow account ?</span>
        <span 
          className="font-bold text-amber-500 ml-2 cursor-pointer"
          onClick={() => router.push("/auth/signin")}>
            Sign in
        </span>
      </p>
    </div>
  );
};

export default signup;
