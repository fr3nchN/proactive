import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const Main = combineReducers({
    router: routerReducer,
});

export default Main;
