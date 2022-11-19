// import logo from './logo.svg';
import './App.css';

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
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" apiKey={apiKey} country="us" pageSize={pageSize} category="general" />}></Route>
          <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} country="us" pageSize={pageSize} category="sports" />}></Route>
          <Route exact path="/business" element={<News key="business" apiKey={apiKey} country="us" pageSize={pageSize} category="business" />}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} country="in" pageSize={pageSize} category="entertainment" />}></Route>
          <Route exact path="/health" element={<News key="health" apiKey={apiKey} country="us" pageSize={pageSize} category="health" />}></Route>
          <Route exact path="/science" element={<News key="science" apiKey={apiKey} country="us" pageSize={pageSize} category="science" />}></Route>
          <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} country="us" pageSize={pageSize} category="technology" />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

