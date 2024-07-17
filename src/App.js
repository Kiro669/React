// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/new-video" component={NewVideo} />
      </Switch>
    </Router>
  );
}

export default App;
