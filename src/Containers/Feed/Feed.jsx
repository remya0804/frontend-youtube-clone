import React, { useEffect, useState } from 'react'

import './feed.css'
import moment from"moment";

import c1 from '../../assets/c1.avif'
// import c2 from '../../assets/c2.avif'
// import c3 from '../../assets/c3.avif'
// import c4 from '../../assets/c4.avif'
// import c5 from '../../assets/c5.avif'
// import c6 from '../../assets/c6.avif'
// import c7 from '../../assets/c7.avif'
// import c8 from '../../assets/c8.avif'
// import c9 from '../../assets/c9.avif'
// import c10 from '../../assets/c10.avif'

import {Link } from 'react-router-dom';

import API_KEY from '../../assets/data'
import {valueConverter} from '../../assets/data'


const Feed = ({category}) => {

    const [fetchdata,setfetchData] = useState([]);

    const fetchData = async () => {

        const category_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;

        await fetch(category_url)
                        .then(response => response.json())
                        .then(data =>setfetchData(data.items));

    
    }

    useEffect(() => {
            fetchData();
        

       
    },[category])

console.log(API_KEY);

  return (

    <div className="feed">

        {

            fetchdata.map((item,idx) => {

                return <Link key={idx} to={`Video/${item.snippet.categoryId}/${item.id}`}  className="card">

                            <img src={`${item.snippet.thumbnails.medium.url}`} alt="" />
                            <h2>{item.snippet.title}</h2>
                            <h3>{item.snippet.channelTitle}</h3>
                            <p>{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
    
                        </Link>
            })
        }

        
       
        
    </div>
  )
}

export default Feed


 {/* <Link to={`Video/20/23435`}  className="card">

            <img src={c2} alt="" />
            <h2>Channel name</h2>
            <h3>From epic drone shots to inspiring moments in nature</h3>
            <p>15k views &bull; 2 days ago</p>

        </Link>
        <div className="card">

            <img src={c3} alt="" />
            <h2>Channel name</h2>
            <h3>From epic drone shots to inspiring moments in nature</h3>
            <p>15k views &bull; 2 days ago</p>

        </div>
        <div className="card">

            <img src={c4} alt="" />
            <h2>Channel name</h2>
            <h3>From epic drone shots to inspiring moments in nature</h3>
            <p>15k views &bull; 2 days ago</p>

        </div>
        <div className="card">

            <img src={c5} alt="" />
            <h2>Channel name</h2>
            <h3>From epic drone shots to inspiring moments in nature</h3>
            <p>15k views &bull; 2 days ago</p>

        </div>
        <div className="card">

            <img src={c6} alt="" />
            <h2>Channel name</h2>
            <h3>From epic drone shots to inspiring moments in nature</h3>
            <p>15k views &bull; 2 days ago</p>

        </div>
        <div className="card">

            <img src={c7} alt="" />
            <h2>Channel name</h2>
            <h3>From epic drone shots to inspiring moments in nature</h3>
            <p>15k views &bull; 2 days ago</p>

        </div>
        <div className="card">

            <img src={c8} alt="" />
            <h2>Channel name</h2>
            <h3>From epic drone shots to inspiring moments in nature</h3>
            <p>15k views &bull; 2 days ago</p>

        </div>
        <div className="card">

            <img src={c9} alt="" />
            <h2>Channel name</h2>
            <h3>From epic drone shots to inspiring moments in nature</h3>
            <p>15k views &bull; 2 days ago</p>

        </div>
        <div className="card">

            <img src={c10} alt="" />
            <h2>Channel name</h2>
            <h3>From epic drone shots to inspiring moments in nature</h3>
            <p>15k views &bull; 2 days ago</p>

        </div> */}