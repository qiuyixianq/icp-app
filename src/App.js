import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>

        <Route path='/dashboard' exact>
          <Dashboard />
        </Route>


      </Switch>

    </Router>
  )
}

export default App;
