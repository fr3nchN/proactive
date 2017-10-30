import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import MainReducer from './reducers'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import Navbar from './components/Navbar';
import App from './components/App';
import About from './components/About';
import Community from './components/Community';
import Footer from './components/Footer';
import GetStarted from "./components/GetStarted";
import ReleaseNotes from "./components/ReleaseNotes";
import Programming from "./components/Programming";
import links from "./links"

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

console.log("links", links);

ReactDOM.render(
    <Provider store={store} >
        <ConnectedRouter history={history}>
            <div>
                <Route path="/" component={Navbar}/>
                <Route exact path={links.home} component={App}/>
                <Route path={links.releasenotes} component={ReleaseNotes}/>
                <Route path={links.about} component={About}/>
                <Route path={links.community} component={Community}/>
                <Route path={links.getstarted} component={GetStarted}/>
                <Route path={links.programming} component={Programming}/>
                <Route path="/" component={Footer}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('react')
);
