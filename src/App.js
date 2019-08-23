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
import NotFound from "./components/NotFound";
import Team from "./components/Team";



const App = () => {
  return (
      <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Main} />
                  <Route path="/teams/:team/" component={Team} />
                  <Route  component={NotFound} />
              </Switch>
      </BrowserRouter>

  );
}

export default App;

//TODO
// Put each conferences teams and w l pts into services component DONE
// make table with conferences sortable by team abc, w, l, or pts DONE WOW THAT WAS HARD
// fix tree!! -> break up main component into multiple components? DONE
// when we click on a team from the standing or search a team by name, our results pull up the correct page
// => team page => pulls team records data from api and displays it
// => how to do the searching
// draw up design for each teams page... Store img?
// replace contact button with login button???
// replace log in button with random team button????
// random players in carousel??
// teams page? other than landing page we  can have a page that will have rows storing each team and their data
// autofill for team names
// team not found page
// auth levels cuz youll need to for yoga ladies
// add google maps for the location of the team like eliteprospects does
