//react imports
import React from 'react';
import './App.css';
import {
  BrowserRouter,Router,
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
//subscribers
import withContext from "./Context" //weird name note that
import Nav from "../src/components/Nav"
import UserSignOut from "../src/components/UserSignOut"
import Authenticated from "../src/components/Authenticated"
import Register from "../src/components/Register"
import PrivateRoute from "../src/PrivateRoute"

const UserSignInWithContext = withContext(Login); // we pass UserSignIn to the providers context
const NavWithContext = withContext(Nav)
const UserSignOutWithContext = withContext(UserSignOut);
const AuthWithContext = withContext(Authenticated); // we pass Auth to the providers context
const RegisterWithContext = withContext(Register);
const TeamWithContext = withContext(Team)

const App = () => {
  return (
      <BrowserRouter>
          <div>
              <NavWithContext/>
              <Switch>
                  <Route exact path="/" component={Main} />
                  <PrivateRoute path="/teams/:team" component={TeamWithContext} />
                  {/*<Route path="/login" component={Login}/>*/}
                  <PrivateRoute path="/authenticated" component={AuthWithContext} />
                  <PrivateRoute path="/settings" component={AuthWithContext} />
                  <Route path="/login" component={UserSignInWithContext} />
                  <Route path="/signout" component={UserSignOutWithContext} />
                  <Route path="/register" component={RegisterWithContext}/>
                  <Route  component={NotFound} />
              </Switch>
          </div>
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
// add nhl logo to navbar where it says nhl DONE
// auth DONE
// add nhl logo to navbar where it says nhl DONE
// auth levels. logged in get access to click on each player for further stats DONE, must be logged in to view team roster
// fix placement of users email once logged in DONE
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// NOT DONE:
// random players in carousel??
// autofill for team names
// Make not found page nicer
// add google maps for the location of the team like eliteprospects does
// access to click on each player via roster.person.id
// add drop down with teams to navbar
// sign up for some email news
// scaling the site properly so it is responsive and will work properly on all screen sizes breh bro brodie
// sessions and cookies... store time on page and all sorts of stuff if possilbe
// player stats from api if the user is logged in
// ga