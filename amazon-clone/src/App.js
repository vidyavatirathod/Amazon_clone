import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider'


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect (() => {
   //it will run only once when the app component loads.. like if any user data or cart updates..

   auth.onAuthStateChanged(authUser =>{
     console.log('The usr is ', authUser);
   
   if(authUser){
     //thw user just logged in /the user was logged in
     dispatch({
       type:'SET_USER',
       user: authUser
     })
   }
   else {
     //the user logged out
     dispatch({
     type:'SET_USER',
     user : null
   })
   }})
  }, [])

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>

        <Route path="/login">
          <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
