import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './store';

// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
// import {
//     BrowserRouter as Router,
//     Route, Link, Switch
// } from "react-router-dom";

import './index.css';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider } from '@material-ui/core/styles'  // 追加
import { theme } from './components/material'// class App extends React.Component {


// historyインスタンスの作成
const history = createBrowserHistory();
// storeの作成
const store = createStore(history);


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
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
