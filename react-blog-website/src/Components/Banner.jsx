import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from "react-icons/fa6";


const Banner = () => {
  return (
    <div className='px-4 pt-12 pb-12 bg-black mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to our Blog</h1>
            <p className='text-gray-100 lg:w-3/5 mx-auto font-primary'>Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas.we offer everthing you need to get started,from helpful tipa and tutorials</p>
            <div className='pt-5'>
                <Link to="/" className='font-medium hover:text-orange-500 inline-flex items-center'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>
            </div>
        </div>
        
    </div>
  )
}

export default Banner