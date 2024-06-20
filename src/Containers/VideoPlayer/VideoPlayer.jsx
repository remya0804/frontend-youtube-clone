import React, { useEffect, useState } from 'react'
import './videoplayer.css'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { MdOutlineSaveAlt } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import API_KEY from '../../assets/data'
import{valueConverter} from '../../assets/data'
import moment from"moment";

// import v1 from '../../assets/v1.mp4';
import v2 from '../../assets/v2.mp4';
import kongsuni from '../../assets/kongsuni.jpeg';
import { useParams } from 'react-router-dom';


const VideoPlayer = () => {

  const [videodetails,setVideodetails] = useState(null);
  const [channeldetails,setChanneldetails] = useState(null);
  const [commentdetails,setCommentdetails] = useState([]);

  const {videoId} =  useParams();

  const fetchVideodata = async () => {

    const videodetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}` ;

    await fetch(videodetails_url)
          .then(response => response.json())
          .then(data => setVideodetails(data.items[0]));

  }

  
  const fetchChanneldata = async () => {

    const channeldetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videodetails.snippet.channelId}&key=${API_KEY}` ;

    console.log(channeldetails_url)

    await fetch(channeldetails_url)
          .then(response => response.json())
          .then(data => setChanneldetails(data.items[0]));

  }

 
 

  useEffect (() => {

    fetchVideodata();

  },[videoId]);

  useEffect (() => {

    if(videodetails){

      fetchChanneldata();
      fetchCommentdata();


    }
  

  }, [videodetails]);


  const fetchCommentdata = async () => {

    const commentdetails_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxresults=100&videoId=${videoId}&key=${API_KEY}` ;

    await fetch(commentdetails_url)
          .then(response => response.json())
          .then(data =>setCommentdetails(data.items));

  }

 

  
  return (
    
    <div className="videoplayer">


      <iframe 
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
      
      </iframe>
      
      {/* <video src={v2} autoPlay muted controls></video> */}
      <h3>{videodetails ? videodetails.snippet.title : 'no title avalable'}</h3>

      <div className="videoplayer-info">

        <p>{ videodetails ? valueConverter(videodetails.statistics.viewCount) : 'no count available'} Views &bull; {videodetails ? moment(videodetails.snippet.publishedAt).fromNow() : 'not avalibla' }</p>

        <div className="info-icons">

           <span><AiOutlineLike />{ videodetails ? valueConverter(videodetails.statistics.likeCount) : 'no count available'}</span> 
            <span><AiOutlineDislike /></span> 
            <span><PiShareFat />Share</span> 
            <span><MdOutlineSaveAlt /> Save</span> 

        </div>
      </div>

      <hr />

      <div className="publisher">

        <img src={channeldetails ? channeldetails.snippet.thumbnails.default.url : ''} alt="" />

        <div className="channel-info">

          <p>{videodetails ? (videodetails.snippet.channelTitle) : 'no title avalable'}</p>

          <span>{channeldetails ?valueConverter(channeldetails.statistics.subscriberCount) : ''} Subscribers</span>

        </div>

        <button>Subscribe</button>

      </div>

      <div className="video-description">

        <p>{videodetails ? (videodetails.snippet.description).slice(0,250) : 'no title avalable'} </p>
       
        <hr />

        <h4>{ videodetails ? valueConverter(videodetails.statistics.commentCount) : 'No'} Comments</h4>

        {

          commentdetails.map((comment,idx) => {

            return <div key={idx} className="comment">

                          <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} />
                
                          <div className="comment-info">
                
                            <h3> {comment.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                
                            <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                
                            <div className="comment-action">
                
                                <AiOutlineLike />
                
                                <span>{valueConverter(comment.snippet.topLevelComment.snippet.likeCount)}</span>
                                
                                <AiOutlineDislike />
                
                
                            </div>
  
            </div>
  
          </div>
          })
        }

        

        
      </div>
    </div>
  )
}

export default VideoPlayer