const redux = require('redux');
const createStore = redux.createStore;

// Global State - JS Object
const initialState = {
    counter: 0
};

//Reducer
// Even multiple reducer will be combined into one.
// REducer is the onlything that will update the state .
//Reducer  - accepts two arguments
// state : is a old state
// Returns updated state
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());


//Subscription
store.subscribe(() => {
    console.log('Subscription', store.getState());
});

//Dispatching action
/* TYPE is one property mandatory, 
also add another 
properties to be passed with action */
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
