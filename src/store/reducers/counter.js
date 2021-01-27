import * as actionTypes from '../actions';

const initialState = {
    counter: 0    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:

            // returning a new object
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
           /*  return {
                counter: state.counter + 1
            } */
        case actionTypes.DECREMENT:
            return {
                ...state,  // Spread operator
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,  // Spread operator
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,  // Spread operator
                counter: state.counter - action.value
            }       
    }   
    return state;
}

export default reducer;