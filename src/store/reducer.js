const initialState = {
    counter: 0,
    results : []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':

            // returning a new object
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
           /*  return {
                counter: state.counter + 1
            } */
        case 'DECREMENT':
            return {
                ...state,  // Spread operator
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,  // Spread operator
                counter: state.counter + action.value
            }
        case 'SUBTRACT':
            return {
                ...state,  // Spread operator
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
    }   
    return state;
}

export default reducer;