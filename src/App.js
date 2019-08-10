//react imports
import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
//class imports
import Header from "./components/Header";
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import Caro from "./components/Caro";
import Jumbo from "./components/Jumbo";
import Video from "./components/Video";



const App = () => {
  return (
      <BrowserRouter>
        <Header/>
        <Jumbo/>
            <Video/>
            <Caro/>


      </BrowserRouter>

  );
}

export default App;

//TODO
// Put caro in jumbrotron container
