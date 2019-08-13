//react imports
import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
//class imports
import Nav from "./components/Nav";
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import Caro from "./components/Caro";
import Jumbo from "./components/Jumbo";
import Header from "./components/Header";

import Video from "./components/Video";
import Main from "./components/Main";
import Footer from "./components/Footer";
import RecentGameList from "./components/RecentGameList";



const App = () => {
  return (
      <BrowserRouter>
            <Header/>
                <Main/>
                <Footer/>



      </BrowserRouter>

  );
}

export default App;

//TODO
// Put caro in jumbrotron container
