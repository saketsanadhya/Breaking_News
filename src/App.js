import  React,{useState} from 'react'
import './App.css';

import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App= ()=>{
  const apiKey='4b716541d96b4f61acc8fefb9bfe40c0';
  const [progress,setProgress]=useState([0]);
    return (
      <div>
        <Router>
          <NavBar></NavBar>
          <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route path="/" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={5} country='in' category='general' />} />
            <Route path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={5} country='in' category='general' />} />
            <Route path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" s pageSize={5} country='in' category='business' />} />
            <Route path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={5} country='in' category='sports' />} />
            <Route path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={5} country='in' category='technology' />} />
          </Routes>
        </Router>
      </div>
    )
}

export default App