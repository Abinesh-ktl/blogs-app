import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {FaBars, FaDribbble, FaFacebook,  FaInstagram,  FaTwitter, FaXmark  } from "react-icons/fa6";
import Model from './Model';

const Navbar = () => {


  const [ismenuopen,Setismenuopen]=useState(false);
  const[ismodelopen,setmodelopen]=useState(false)


  const toggle = () =>{
    Setismenuopen(!ismenuopen)

  }
  

  //navItems

  const navitems=[
    {path:"/",link:"Home"},
    {path:"/About",link:"About"},
    {path:"/Blogs",link:"Blogs"},
    {path:"/Contact",link:"Contact"},
    {path:"/Services",link:"Services"},
    
  ]

  const openmodel=()=>{
    setmodelopen(true)

  }
  const closemodel=()=>{
    setmodelopen(false)
  } 



  return (
    <header className="bg-black text-white">
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <a className="text-xl font-bold text-white" href="/">Design <span className=' text-orange-500'>Ak</span></a>
        <ul className='md:flex gap-12 text-lg hidden'>
          {
            navitems.map(({path,link})=>
              <li className='text-white hover:text-orange-500'>
                <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{link}</NavLink>
              </li>
            )
          }
        </ul>
        <div className='text-white lg:flex gap-4 hidden items-center'>
          <a className="hover:text-orange-500" href="/"><FaFacebook/></a>
          <a className="hover:text-orange-500" href="/"><FaDribbble/></a>
          <a className="hover:text-orange-500" href="/"><FaInstagram/></a>
          <button onClick={openmodel} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 '>Login</button>

       

        </div>
        <Model isopen={ismodelopen} onclose={closemodel} />


     



        <div  className='md:hidden'>
            <button onClick={toggle} className='cursor-pointer'>
              {
                ismenuopen?<FaXmark className='w-6 h-5'/>:<FaBars className='w-6 h-5'/>

              }
              </button>
          </div>

      </nav>

      {/* menu for nav bar */}

      <div>
      <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${ismenuopen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" :"hidden"}`}>
          {
            navitems.map(({path,link})=>
              <li className='text-black'>
                <NavLink onClick={toggle} to={path}>{link}</NavLink>
              </li>
            )
          }
        </ul>

      </div>


    
    </header>
  )
}

export default Navbar