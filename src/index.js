import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import App from './components/App';
import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './store';

// import Home from './components/Home';
// import ArticleViewer from './components/ArticleViewer';
// import EditNewArticle from './components/EditNewArticle';
// import authentication from './components/authentication';
// import './components/Home.css';
import {
    BrowserRouter as Router,
    Route, Link, Switch
} from "react-router-dom";

import './index.css';
import * as serviceWorker from './serviceWorker';

// historyインスタンスの作成
const history = createBrowserHistory();
// storeの作成
const store = createStore(history);

ReactDOM.render(
    <App />
    // <Provider store={store}>
    //     <ConnectedRouter history={history}>
    //         <switch>
    //             <Route exact path="/" component={Home} />
    //             <Route exact path="/ArticleViewer" component={ArticleViewer} />
    //             <Route path="/ArticleViewer/:article_id" component={ArticleViewer} />
    //             <Route path="/EditNewArticle" component={EditNewArticle} />
    //             <Route path="/auth" component={authentication} />
    //         </switch>
    //         <Switch>
    //             <App />
    //         </Switch>
    //     </ConnectedRouter>
    // </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
