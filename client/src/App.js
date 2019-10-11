import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import UserHome from './components/UserHome/UserHome';
import RestoHome from './components/RestoHome/RestoHome';
import RouteProtector from './components/RouteProtector/RouteProtector';
import actions from './redux/actions';
import { connect } from 'react-redux';


function App({ }) {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/UserHome" component={() =>
            <RouteProtector> <UserHome /> </RouteProtector>

          } exact />
          <Route path="/RestoHome" component={() =>
            <RouteProtector>
              <RestoHome />
            </RouteProtector>
          } exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;

