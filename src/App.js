import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CashIn } from './components/CashIn/CashIn';
import { CashOut } from './components/CashOut/CashOut';

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>

        <Route path='/' exact>
          <div className="mt-10">
            <h3 className="text-xl text-center">Welcome, Khoo</h3>
            <img className="mx-auto" src="/img/home/appreciate.svg" alt="welcome" />
          </div>
        </Route>

        <Route path='/dashboard' exact>
          <Dashboard />
        </Route>

        <Route path='/cashin' exact>
          <CashIn />
        </Route>

        <Route path='/cashout' exact>
          <CashOut />
        </Route>

      </Switch>

    </Router>
  )
}

export default App;
