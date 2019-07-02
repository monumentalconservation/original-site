import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Nav from './Nav'
import Home from './Home'
import About from './About'
import Sites from './Sites'
import GDPR from './GDPR'
import Results from './Results'

class App extends Component {
  render() {
    return (
      // router wraps whole page
      <Router>
        <div className="App">
          {/* intro title */}

          <Nav />


          {/* routed pages */}
          <Route exact path="/" component={Home} />
          <Route path="/sites" component={Sites} />
          <Route path="/new-site" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gdpr" component={GDPR} />
          <Route path="/results" component={Results} />
        </div>
      </Router>
    );
  }
}

export default App;
