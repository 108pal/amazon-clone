import React,{ useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import {BrowserRouter as Router , Route ,Routes } from 'react-router-dom'
import { auth } from './firebase1'
import { useStateValue } from './StateProvider';


function App() {

  const [{},dispatch]=useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
       <Routes>
          <Route path='/'element= {[<Header />,<Home />]}/>
          <Route path="/checkout" element= {[<Header />,<Checkout />]}/>
          <Route path='/login'element= {[<Login />]}/>
          <Route path='/payment'element= {[<Header />,<Payment/>]}/>
       </Routes> 
      </div>
    </Router>
  )
}

export default App;
