import React from 'react'
import BlogPage from '../Components/BlogPage'

const Blogs = () => {
  return (
    <div>
      <div className='pt-16 pb-16 justify-center text-center bg-black text-white'>
      <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to our Blog</h2>

      </div>
      <div className='max-w-7xl mx-auto'>
        <BlogPage/>
      </div>
    </div>
  )
}

export default Blogs