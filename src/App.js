import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route} from 'react-router-dom'

import { Home } from './pages/home/Home'
import { Debug } from './pages/debug/Debug'
import { AddEdit } from './pages/addEdit/AddEdit'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route preserveScrollPosition exact path="/" component={Home} />
            <Route preserveScrollPosition exact path="/debug/" component={Debug} />
            <Route preserveScrollPosition exact path="/addEdit/" component={AddEdit} />
        </div>
      </Router>
    );
  }
}

export default App;
