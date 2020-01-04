//routerReducerとtasksReducerの二つのReduerを合わせるためのindex

import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import articleReducer from '../reducers/tasks';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            tasks: articleReducer,
            router: routerReducer,
        }),
        applyMiddleware(
            routerMiddleware(history)
        )
    );
}