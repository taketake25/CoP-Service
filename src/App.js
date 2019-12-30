// import React from 'react';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Link,
} from "react-router-dom";

import Home from './Home';
import ArticleViewer from './ArticleViewer';
import EditNewArticle from './EditNewArticle';
import authentication from './authentication';
import './Home.css';
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route exact path="/" component={Home} />
          <Route path="/ArticleViewer" component={ArticleViewer} />
          <Route path="/EditNewArticle" component={EditNewArticle} />
          <Route path="/auth" component={authentication} />
        </switch>
        <div>
          <ul>
            <Link to="/">Home  </Link>
            <Link to="/ArticleViewer">ArticleViewer  </Link>
            <Link to="/EditNewArticle">EditNewArticle  </Link>
            <Link to="/auth">authentication  </Link>
          </ul>
        </div>
      </Router>

      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div> */}
    </div>
  );
}

export default App;
