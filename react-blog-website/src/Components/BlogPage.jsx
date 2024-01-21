import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagenation from './Pagenation';
import CategorySelction from './categorySelction';
import SideBar from './SideBar';

const BlogPage = () => {

    const[blogs,setBlogs]=useState([]);
    const[CurrentPage ,setCurrentPage]=useState(1);
    const pagesize=12;
    const[selectedCategory,SetselectedCategory]=useState(null)
    const[activecategory,setactiveCategory]=useState(null)

    useEffect(()=>{
        async function fetchBlogs(){
            let url=`http://localhost:5000/blogs?page=${CurrentPage}&limit=${pagesize}`;

            if(selectedCategory){
                url+=`&category=${selectedCategory}`
            }
            const response=await fetch(url);
            const data=await response.json()
            console.log(data);
            setBlogs(data);

        }

        fetchBlogs();
    },[CurrentPage,pagesize,selectedCategory]);

// function for page change button:
    const handlePagechange=(pagenumber)=>{
        setCurrentPage(pagenumber)
    }


    const handleCatergoryChange=(category)=>{
        SetselectedCategory(category);
        setCurrentPage(1);
        setactiveCategory(category)
    }

 





  return (
    <div>


    {/* category section */}
    <div><CategorySelction onSelectCategory={handleCatergoryChange} selectedCategory={selectedCategory} activecategory={activecategory}/></div>

    {/* blogs card section */}
    <div className='flex flex-col lg:flex-row gap-12'>
        <BlogCards blogs={blogs} CurrentPage={CurrentPage} selectedCategory={selectedCategory} pagesize={pagesize}/>

        <div>
            <SideBar/>
        </div>

    </div>

    {/* pagination section */}
    <div>
        <Pagenation onPageChange={handlePagechange}  blogs={blogs} CurrentPage={CurrentPage} pagesize={pagesize} />
    </div>


    </div>
  )
}

export default BlogPage