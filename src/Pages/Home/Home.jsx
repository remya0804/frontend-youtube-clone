import React from 'react'
import './home.css'
import Sidebar from '../../Containers/Sidebar/Sidebar'
import Feed from '../../Containers/Feed/Feed'

const Home = ({sidebar,category,setCategory}) => {

  

  return (
    <>

    <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />

    {/* <div className={`home-container ${sidebar ? '' : 'large-home-container'}` }> */}
    <div className={`home-container ${sidebar ?  'large-home-container' : '' }` }>

      <Feed category={category} />


    </div>
    
    </>
  )
}

export default Home