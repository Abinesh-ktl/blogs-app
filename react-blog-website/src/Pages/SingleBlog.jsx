import React from 'react'
import { FaClock, FaUser } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom'
import SideBar from '../Components/SideBar'


const SingleBlog = () => {
    const data=useLoaderData();
    const {title,image,category,author,published_date,reading_time,content}=data[0];

    // console.log(data);

  return (
    <div className='max-w-7xl mx-auto my-12 flex flex-col lg:flex-row gap-12 '>
        <div className='lg:w-3/4 mx-auto'>
            <div>
                <img src={image} alt="" className='w-full mx-auto rounded' />
            </div>
            <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
            <p className='mb-3 text-gray-600'> <FaUser className='inline-flex items-center mr-2'/>{author}|{published_date}</p>
            <p className='mb-3 text-gray-600'> <FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>
            <p className='text-base text-gray-600 mb-6'>{content}</p>
            <div className='text-base text-gray-500 mb-6'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quam molestias modi quaerat aut dolore tenetur maiores earum officia laboriosam fuga suscipit commodi voluptatem, fugiat pariatur saepe odio deserunt amet.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, necessitatibus officia! Eveniet tenetur, molestias aliquid perspiciatis qui voluptatum quia maiores iste aspernatur eum et unde optio, voluptatem, quasi nostrum cupiditate.</p>
                <br />
                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde maxime debitis eligendi ratione quas alias quasi aspernatur quae odio ab suscipit, animi incidunt excepturi omnis veritatis voluptate? Eveniet, quos molestias.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quam molestias modi quaerat aut dolore tenetur maiores earum officia laboriosam fuga suscipit commodi voluptatem, fugiat pariatur saepe odio deserunt amet.</p>
                <br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, necessitatibus officia! Eveniet tenetur, molestias aliquid perspiciatis qui voluptatum quia maiores iste aspernatur eum et unde optio, voluptatem, quasi nostrum cupiditate.</p>
                <br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde maxime debitis eligendi ratione quas alias quasi aspernatur quae odio ab suscipit, animi incidunt excepturi omnis veritatis voluptate? Eveniet, quos molestias.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde maxime debitis eligendi ratione quas alias quasi aspernatur quae odio ab suscipit, animi incidunt excepturi omnis veritatis voluptate? Eveniet, quos molestias.</p>
               
            </div>
            <div className='lg:w-1/2'>
              <SideBar/>
            </div>


        </div>
    </div>
  )
}

export default SingleBlog