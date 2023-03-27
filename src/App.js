// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const pageSize = 18;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [mode, setMode] = useState("light")                  // Whether the dark mode is enabled or not
  // const [alert, setAlert] = useState(null)
  const [search, setSearch] = useState('');

  function toggleModes() {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(0, 0, 0)";
      document.body.style.color = "white";
      // document.getElementById("myBox").classList.add("bg-black-gradient-2")
      // showAlert("success", " Dark Mode has been Enabled")
      
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "whitesmoke";
      document.body.style.color = "black";
      // document.getElementById("myBox").classList.add("border border-dark")
      // showAlert("success", " Light Mode has been Enabled")
      // document.getElementById("cardShadow").classList.add("shadow p-3 mb-5 my-4 bg-body rounded")
    }
  }
  return (
    <div className='clr'>
      <BrowserRouter>
        <Navbar mode={mode} search={search} toggleMode={toggleModes}/>
        <Routes>
          <Route exact path="/" element={<News mode={mode} key="general" apiKey={apiKey} country="us" pageSize={pageSize} category="general" />}></Route>
          <Route exact path="/sports" element={<News mode={mode} key="sports" apiKey={apiKey} country="us" pageSize={pageSize} category="sports" />}></Route>
          <Route exact path="/business" element={<News mode={mode} key="business" apiKey={apiKey} country="us" pageSize={pageSize} category="business" />}></Route>
          <Route exact path="/entertainment" element={<News mode={mode} key="entertainment" apiKey={apiKey} country="in" pageSize={pageSize} category="entertainment" />}></Route>
          <Route exact path="/health" element={<News mode={mode} key="health" apiKey={apiKey} country="us" pageSize={pageSize} category="health" />}></Route>
          <Route exact path="/science" element={<News mode={mode} key="science" apiKey={apiKey} country="us" pageSize={pageSize} category="science" />}></Route>
          <Route exact path="/technology" element={<News mode={mode} key="technology" apiKey={apiKey} country="us" pageSize={pageSize} category="technology" />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

// npm start

