import React from 'react'
import './video.css'
import '../../Containers/Sidebar/sidebar.css'
import VideoPlayer from '../../Containers/VideoPlayer/VideoPlayer'
import Recommended from '../../Containers/Recommended/Recommended'
import Sidebar from '../../Containers/Sidebar/Sidebar'
import { useParams } from 'react-router-dom'

const Video = ({sidebar,category,setCategory}) => {

  const {videoId,categoryId} = useParams();
  return (
    <div className='video-page'>  

{
  sidebar===false ? <Sidebar className='sidebar' sidebar={sidebar} />   : <div> </div> 


}
    
{console.log(sidebar)}


     {/* <Sidebar /> */}
      
      <VideoPlayer  videoId={videoId} categoryId={categoryId} />

      <Recommended  categoryId={categoryId}/>
    </div>
  )
}

export default Video