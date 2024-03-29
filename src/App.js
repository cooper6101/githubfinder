import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';
import './index.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />

            <div
              className='container search-div-main'
              style={{ minHeight: '500px' }}
            >
              <Alert />

              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
          <Footer />
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
