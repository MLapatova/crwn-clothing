import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from '../src/pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
<<<<<<< HEAD
// new comment
=======
// comment
>>>>>>> 1c57b2215dd4b1b1e591fec0cf543179592c8918
