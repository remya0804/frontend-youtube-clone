import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Containers/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';
import { useState } from 'react';



function App() {

  const [sidebar,setSidebar] = useState(true);

  // const [category,setCategory] = useState(0);



  return (
    <div className="App">

      <Navbar sidebar={sidebar} setSidebar={setSidebar}/>

      <Routes>

        {/* <Route  path='/'  element={<Home sidebar={sidebar}  />} /> */}
        <Route  path='/frontend-youtube-clone'  element={<Home sidebar={sidebar}  />} />
        <Route  path='/frontend-youtube-clone/video/:categoryId/:videoId'  element={<Video sidebar={sidebar}/>} />

      </Routes>
     
     
    </div>
  );
}

export default App;
