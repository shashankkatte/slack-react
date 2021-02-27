import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Route path="/">
              <h1>This home page</h1>
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
