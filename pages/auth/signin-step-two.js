import { useRouter } from 'next/router'
import React from 'react'

const signinTwo = () => {
    const router = useRouter();
    const {email,password} = router.query

    return (
        <div>
            <p className='text-xl font-bold'>Enter 8 digit code we sent to your email:{email}</p>
            
        </div>
    )
}

export default signinTwo