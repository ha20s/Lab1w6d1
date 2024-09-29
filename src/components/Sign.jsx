import React from 'react'
import Nav from './Nav'
import { Link } from "react-router-dom";

function Sign() {
  return (
    <div>
        <Nav></Nav>
    <div className='bg-violet-200 border-violet-800 lg:mx-[20%] m-[5%] rounded-xl border-violet-800 border' >


        <div className=' p-10 flex flex-col '>
            <p className='text-center lg:text-4xl text-2xl my-5'>Sign In</p>
            <label htmlFor="">Email:</label>
            <input type="text" className='rounded border border-violet-800 ' placeholder='Email' />

            <label htmlFor="">Password:</label>
            <input type="text" className='rounded border border-violet-800  ' placeholder='Password' />


            <p>Forget Password? <strong>Reset Password</strong> </p>
            <div className='mt-5'> 
                <Link to="/home" className="border border-violet-800 rounded  text-center px-2">Submit</Link>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Sign
