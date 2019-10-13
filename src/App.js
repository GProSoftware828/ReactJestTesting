import React, { Component } from 'react';
import './app.scss';
import Certifications from './components/certifications';
import './app.scss';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './components/home';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/certifications" exact component={Certifications} />
        <Route path="/" exact component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
