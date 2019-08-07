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
import Carousel from "./components/Carousel";
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import Caro from "./components/Caro";



const App = () => {
  return (
      <BrowserRouter>
        <Header/>
            <Caro/>

      </BrowserRouter>

  );
}

export default App;

//TODO
// Put caro in jumbrotron container
