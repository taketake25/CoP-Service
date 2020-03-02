// import React from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Route, Link, Redirect,
} from "react-router-dom";
import { connect } from 'react-redux';
import Home from './Home';
import Search from './Search';
import ArticleViewer from './ArticleViewer';
import EditNewArticle from './EditNewArticle';
import authentication from './authentication';
// import Auth from './Auth';
import './Home.css';
import { Switch } from '@material-ui/core';

function App() {
  // render() {

  return (
    <div>
      <Router>
        <switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={authentication} />
          <Route path="/search/:word" component={Search} />
          <Route exact path="/ArticleViewer" component={ArticleViewer} />
          <Route path="/ArticleViewer/:article_id" component={ArticleViewer} />

          {/* <Auth>
            <Switch> */}
          {/* <Route exact path="/:search_word" component={Home} /> */}
          <Route path="/EditNewArticle" component={EditNewArticle} />
          {/* <Redirect from="/" to="/" /> */}
          {/* </Switch>
          </Auth> */}
          {/* <Route path="*" component={Home} /> */}
        </switch>
        {/* <div>
          <ul>
            <Link to="/">Home  </Link>
            <Link to="/ArticleViewer">ArticleViewer  </Link>
            <Link to="/EditNewArticle">EditNewArticle  </Link>
            <Link to="/auth">authentication  </Link>
          </ul>
        </div> */}
      </Router>
    </div >
  );
}
// }

export default App;