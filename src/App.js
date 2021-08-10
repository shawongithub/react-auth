import Templates from './components/Home/Home'
import Header from './components/Header/Header';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp'
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import { createContext } from 'react'
import Logout from './components/Logout/Logout';
import Location from './components/Location/Location';
import LandingPlace from './components/LandingPlace/LandingPlace';
export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    email: '',
    loggedIn: false
  })
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Templates />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <PrivateRoute path='/destination'>
            <Destination />
          </PrivateRoute>
          <PrivateRoute path='/blog'>
            <Blog />
          </PrivateRoute>
          <Route path='/landing-place'>
            <LandingPlace />
          </Route>
          <Route>
            <Location path='/location/:id' />
          </Route>

          <Route>
            <Logout />
          </Route>
        </Switch>

      </Router>

    </UserContext.Provider>
  );
}

export default App;
