import React from 'react';
import './App.css';

import Login from './components/Login';

//TODO: DELETE THE BELOW IMPORTS ONCE APP IS UP AND RUNNING, THEY ARE FOR UI TESTING ONLY
import UserLandpage from './components/UserLandpage';
import RestoLandpage from './components/RestoLandpage';
import RestoModal from './components/RestoModal';

function App() {
  return (
    <div className="App">
      <RestoModal />
    </div>
  );
}

export default App;
