import thunk from 'redux-thunk';
import {routerReducer,routerMiddleware} from 'react-router-redux';
import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import * as reducers from '../reducer';
export default {
    getInstantiate: function(initialState, history) {

        const reducer = combineReducers({
            ...reducers,
            routing: routerReducer
        });
        const instance = compose(
            applyMiddleware(thunk, routerMiddleware(history)),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        );
        const store = createStore(reducer, initialState, instance);
        return store;
    
    }
};