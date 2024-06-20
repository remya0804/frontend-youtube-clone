import React, { useState } from 'react'

import './sidebar.css'

import { MdHome } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { SiDsautomobiles } from "react-icons/si";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { SiDcentertainment } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { FaMusic } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";

import peppa from '../../assets/peppa.jpeg'
import panda from '../../assets/panda.jpeg'
import woolfoo from '../../assets/woolfoo.jpeg'
import paw from '../../assets/paw.jpeg'
import kongsuni from '../../assets/kongsuni.jpeg'
import { Link } from 'react-router-dom';


const Sidebar = ({sidebar,category,setCategory}) => {



  return (
    
    // <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
    <div className={`sidebar ${sidebar ?  'small-sidebar' : ''}`}>

      <div className="sidebar-links">

        <div className={`sidebarlink ${category===0 ? "active" : ''}`}>

          <Link to='/'><MdHome className={`home-icon ${category===0 ? "active" : ''}`}/></Link>
          {/* <MdHome /> */}
          <p>Home</p>

        </div>

        <div className={`sidebarlink ${category===20 ? "active" : ''}`}>

          <CgGames onClick={() => setCategory(20)}/>
          <p>Games</p>

        </div>
        <div className={`sidebarlink ${category===2 ? "active" : ''}`}>

          <SiDsautomobiles onClick={() => setCategory(2)} />
          <p>Automobiles</p>

        </div>
        <div className={`sidebarlink ${category===17 ? "active" : ''}`}>

          <MdOutlineSportsSoccer onClick={() => setCategory(17)} />
          <p>Sports</p>

        </div>
        <div className={`sidebarlink ${category===24 ? "active" : ''}`}>

          <SiDcentertainment onClick={() => setCategory(24)}/>
          <p>Entertainment</p>

        </div>
        <div className={`sidebarlink ${category===28 ? "active" : ''}`}>

          <GrTechnology onClick={() => setCategory(28)} />
          <p>Technology</p>

        </div>
        <div className={`sidebarlink ${category===10 ? "active" : ''}`}>

          <FaMusic onClick={() => setCategory(10)} />
          <p>Music</p>

        </div>
        <div className={`sidebarlink ${category===25 ? "active" : ''}`}>
        
          <FaRegNewspaper onClick={() => setCategory(25)} />
          <p>News</p>

        </div>

        <hr />
      
      </div>

      <div className="subscriptions">

        <h3>Subscriptions</h3>

        <div className="subscription">

          <img src={peppa} alt="" /> <p>Peppa Pig</p>
          
        </div>
        <div className="subscription">

          <img src={woolfoo} alt="" /> <p>Woolfoo</p>

        </div>
        <div className="subscription">

          <img src={panda} alt="" /> <p>Dr Panda</p>

        </div>
        <div className="subscription">

          <img src={paw} alt="" /> <p>Paw Patrol</p>

        </div>
        <div className="subscription ">

          <img src={kongsuni} alt="" /> 
           <p>Kongsuni and Friends</p> 

          {/* <div className="tooltip">
            <p>Kongsuni and Friends</p> 
          <span>Kongsuni and Friends</span></div> */}

        </div> 
       
        
      </div>
      
    </div>
  )
}

export default Sidebar