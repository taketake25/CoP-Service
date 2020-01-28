import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import App from './components/App';
import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './store';

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
    // <MuiThemeProvider theme={theme}>
    //     <Provider store={store}>
    <App />
    //     </Provider>
    // </MuiThemeProvider>
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

serviceWorker.unregister();
