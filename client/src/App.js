import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import UserHome from './components/UserHome/UserHome';
import RestoHome from './components/RestoHome/RestoHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/UserHome" component={UserHome} exact />
          <Route path="/RestoHome" component={RestoHome} exact />
        </Switch>
      </BrowserRouter>      
    </div>
  );
}

export default App;
