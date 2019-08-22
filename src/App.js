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
// Put each conferences teams and w l pts into services component DONE
// make table with conferences sortable by team abc, w, l, or pts DONE WOW THAT WAS HARD
// fix tree!! -> break up main component into multiple components?
// when we click on a team from the standing or search a team by name, our results pull up the correct page
// draw up design for each teams page... Store img?
// replace contact button with login button???
// replace log in button with random team button????
// random players in carousel??
