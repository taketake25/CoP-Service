import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; import App from './components/App';
import { ConnectedRouter } from 'react-router-redux';

import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './store';

import './index.css';
import * as serviceWorker from './serviceWorker';

// historyインスタンスの作成
const history = createBrowserHistory();
// storeの作成
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
