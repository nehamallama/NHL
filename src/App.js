//react imports
import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
//class imports
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import Team from "./components/Team";
import Login from "./components/Login";

const App = () => {
  return (
      <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Main} />
                  <Route path="/teams/:team" component={Team} />
                  <Route path="/login" component={Login}/>
                  <Route  component={NotFound} />
              </Switch>
      </BrowserRouter>

  );
}

export default App;

//TODO
// DONE:
// Put each conferences teams and w l pts into services component DONE
// make table with conferences sortable by team abc, w, l, or pts DONE
// fix tree!! -> break up main component into multiple components? DONE
// when we click on a team from the standing or search a team by name, our results pull up the correct page DONE
// => team page => pulls team records data from api and displays it DONE
// => how to do the searching DONE
// fix bug: if we enter localhost/teams/Dallas Stars 2222 the team name and roster will show dallas stars 222 DONE
// draw up design for each teams page... Store img from mongo? DONE
// teams page? other than landing page we  can have a page that will have rows storing each team and their data DONE
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// NOT DONE:
// replace contact button with login button???
// replace log in button with random team button????
// auth levels. logged in get access to click on each player for further stats
// random players in carousel??
// autofill for team names
// Make not found page nicer
// add google maps for the location of the team like eliteprospects does
// add nhl logo to navbar where it says nhl
// access to click on each player via roster.person.id
// add drop down with teams to navbar
// sign up for some email news
// add shadow/some sort of styling to the team logo on teams page
// scaling the site properly so it is responsive and will work properly on all screen sizes breh bro brodie
// sessions and cookies... store time on page and all sorts of stuff if possilbe
// make navbar prettier
