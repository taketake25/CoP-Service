// import React from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Route, Link,
} from "react-router-dom";
import { connect } from 'react-redux';
import Home from './Home';
import Search from './Search';
import ArticleViewer from './ArticleViewer';
import EditNewArticle from './EditNewArticle';
import authentication from './authentication';
import './Home.css';

function App() {
  // render() {

  return (
    <div>
      <Router>
        <switch>
          <Route exact path="/" component={Home} />
          <Route path="/search/:word" component={Search} />
          {/* <Route exact path="/:search_word" component={Home} /> */}
          <Route exact path="/ArticleViewer" component={ArticleViewer} />
          <Route path="/ArticleViewer/:article_id" component={ArticleViewer} />
          <Route path="/EditNewArticle" component={EditNewArticle} />
          <Route path="/auth" component={authentication} />
          {/* <Route path="*" component={Home} /> */}
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
    </div >
  );
}
// }

export default App;