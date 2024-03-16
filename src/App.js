
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
      </div>
    </Router>
  );
}

export default App;
