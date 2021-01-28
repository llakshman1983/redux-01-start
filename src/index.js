import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import {Provider} from 'react-redux';


const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});


// Middleware
const logger = st => {
    return next => {
        return action => {
            console.log('[MIDDLEWARE] Dispatching : ', action);
            const result = next (action);
            console.log('[MIDDLEWARE] Next State : ', st.getState());
            console.log('[MIDDLEWARE] Result : ', result);
            return result;
        }
    }
}


// Dynamically injected by chrome - window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


/* Need to connect redux to react */
// Store Creation
// Can apply multiple middleware as an argument to applyMiddleware
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
/* <Provider store={store}> </Provider> */
//To pass the store
ReactDOM.render(<Provider store={store}><App /> </Provider>, document.getElementById('root'));
registerServiceWorker();


