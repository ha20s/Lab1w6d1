import React from 'react'
import { Link } from "react-router-dom";
import Nav from './Nav';


function Info() {
  return (
    <div>
        <Nav></Nav>
    <div className='bg-violet-200 border-violet-800 lg:m-32 m-10 rounded-xl border-violet-800 border' >


        <div className=' p-10 '>
            <p className='text-center lg:text-4xl text-2xl my-5'>JavaScript Bootcamp</p>
            <p className='mb-5'>Join our immersive JavaScript Bootcamp to master the fundamentals of web development and build dynamic, interactive applications. Whether you're a beginner or looking to enhance your skills, this course will take you from zero to hero in coding!</p>

            <p><strong>Time:</strong> Week Days 10AM - 3PM</p>
            <p className='mb-5'><strong>Location:</strong>Riyadh - Twuaiq Acadmy</p>
            <Link to="/sign" className="border border-violet-800 rounded  px-2">Join Us</Link>

        </div>
    </div>
    </div>
  )
}

export default Info
