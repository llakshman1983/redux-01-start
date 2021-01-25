import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux';

/* Need to connect redux to react */
// Store Creation
const store = createStore(reducer);
/* <Provider store={store}> </Provider> */
//To pass the store
ReactDOM.render(<Provider store={store}><App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
