// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=18 ;
  apiKey = process.env.REACT_APP_NEWS_API 
  render() {
    return (
      <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" apiKey={this.apiKey} country="us" pageSize={this.pageSize} category="general"/>}></Route>
          <Route exact path="/sports" element={<News key="sports" apiKey={this.apiKey} country="us" pageSize={this.pageSize} category="sports"/>}></Route>
          <Route exact path="/business" element={<News key="business" apiKey={this.apiKey} country="us" pageSize={this.pageSize} category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" apiKey={this.apiKey} country="in" pageSize={this.pageSize} category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News key="health" apiKey={this.apiKey} country="us" pageSize={this.pageSize} category="health"/>}></Route>
          <Route exact path="/science" element={<News key="science" apiKey={this.apiKey} country="us" pageSize={this.pageSize} category="science"/>}></Route>
          <Route exact path="/technology" element={<News key="technology" apiKey={this.apiKey} country="us" pageSize={this.pageSize} category="technology"/>}></Route>
        </Routes>
      </BrowserRouter>
      
      </div>
    )
  }
}
