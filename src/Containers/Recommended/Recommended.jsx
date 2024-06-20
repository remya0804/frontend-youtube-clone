import React, { useEffect, useState } from 'react'
import './recommended.css'
import API_KEY, { valueConverter } from '../../assets/data'

import t1 from '../../assets/t1.jpeg'
import t2 from '../../assets/t2.jpeg'
import t3 from '../../assets/t3.jpeg'
import t4 from '../../assets/t4.jpeg'
import t5 from '../../assets/t5.jpeg'
import t6 from '../../assets/t6.jpeg'
import t7 from '../../assets/t7.jpeg'
import t8 from '../../assets/t8.jpeg'
import { Link } from 'react-router-dom'


const Recommended = ({categoryId}) => {

  const [relateddata,setRelateddata] = useState([]);

  const fetchRelateddata = async () => {

    const relateddata_url= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;

    await fetch(relateddata_url).then(response => response.json()).then(data=> setRelateddata(data.items));

  }

  useEffect(() => {

    fetchRelateddata();
  },[])

  return (
    
    <div className="recommended">

     {

      relateddata.map((video,idx) => {

        return <Link to={`/video/${video.snippet.categoryId}/${video.id}`} key={idx} className="recommended-video">

                    <img src={video.snippet.thumbnails.medium.url} alt="" />

                    <div className="recommended-video-info">

                      <h3 className='channel-title'>{video.snippet.title} </h3>

                        <p className='channel-name'>{video.snippet.channelTitle}</p>

                        <p className='views'>{valueConverter(video.statistics.viewCount)} Views</p>

                    </div>

      </Link>
      })
    
    }

      

      
    </div>
  )
}

export default Recommended