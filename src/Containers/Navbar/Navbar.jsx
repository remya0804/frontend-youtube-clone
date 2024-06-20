import React from 'react'
import './navbar.css'

import logo from '../../assets/logo.jpg'

import { CiSearch } from "react-icons/ci";
import { RiVideoUploadFill } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import {Link } from 'react-router-dom';


const Navbar = ({sidebar,setSidebar}) => {
  return (
    <nav className="flex-div">

      <div className="nav-left flex-div">

        <IoMdMenu onClick={() => setSidebar(!sidebar)}/>

        <Link to='/'><img src={logo} alt="" /></Link>

      </div>

      <div className="nav-middle flex-div">

        <div className="search-box flex-div">

          <input type="text" placeholder='Search' />

          <CiSearch />

        </div>


      </div>

      <div className="nav-right flex-div">

   
        <RiVideoUploadFill className='upload'/>
        <LuLayoutDashboard />
        <IoNotificationsSharp />
        <FaUser className='nav-right-user-icon'/>
 
      </div>
    </nav>
  )
}

export default Navbar