import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import MainReducer from './reducers'
import App from './components/App';
import About from './components/About';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

const history = createHistory();
const routerHistoryMiddleware = routerMiddleware(history);

const loggerMiddleware = createLogger();

let store = createStore(
    MainReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        routerHistoryMiddleware
    )
);

ReactDOM.render(
    <Provider store={store} >
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/about" component={About}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('react')
);
