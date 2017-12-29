
import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

import TopBar from 'components/headers/TopBar.js'

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <TopBar></TopBar>
      </Router>
    );
  }

}

export default App;
